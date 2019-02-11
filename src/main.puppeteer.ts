/*
 * File: main.puppeteer.ts
 * Author: Elena Sufieva (fiolent06@gmail.com) https://github.com/ainalain
 *
 * This is a simple setup file for running integrations tests
 * on Puppeteer when several browser instances are required.
 *
 */

/* tslint:disable:no-console*/
import chalk from 'chalk';
import * as fs from 'fs';
import * as genericPool from 'generic-pool';
import * as Mocha from 'mocha';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { Browser } from 'puppeteer';

import * as config from '../config/puppeteer/puppeteer.config.js';

import { login } from './IntegrationTests/testUtils/authentication.puppeteer.helper';
import {
  credentials,
  Credentials
} from './IntegrationTests/testUtils/puppeteer.data';

const { options, sizeOptions, APP_URL } = config;

/*
 * We use chalk to colorize messages in Gitlab CI console, for better log readability
 */
const chalkError = chalk.bold.red;
const chalkWarning = chalk.keyword('orange');
const chalkOk = chalk.bold.green;
const chalkInfo = chalk.bold.magenta;

/*
 * Create pool of browser instances
 * Code taken from here:
 * https://github.com/GoogleChrome/puppeteer/issues/1873#issuecomment-446787045
 */
const createChromePool = async () => {
  const factory = {
    create: () => {
      return puppeteer.launch(options);
    },
    destroy: async (client: Browser) => {
      await client.close();
    }
  };
  const opts = { max: 3, acquireTimeoutMillis: 120000, priorityRange: 3 };
  (global as any).chromepool = genericPool.createPool(factory, opts);

  (global as any).chromepool.on('factoryCreateError', (err: Error) => {
    console.error(err);
  });
  (global as any).chromepool.on('factoryDestroyError', (err: Error) => {
    console.error(err);
  });
};

/*
 * Destroy the pool of browser instances
 * Code taken from here:
 * https://github.com/GoogleChrome/puppeteer/issues/1873#issuecomment-446787045
 */
const destroyChromePool = async () => {
  // Only call this once in your application -- at the point
  // you want to shutdown and stop using this pool.
  (global as any).chromepool.drain().then(() => {
    (global as any).chromepool.clear();
  });
};

/*
 * Login helper allows us to login before running all tests witihn the platform
 */
const loginBeforeAllTests = async (
  browser: Browser,
  userCredentials: Credentials
) => {
  const page = await browser.newPage();

  await page.setViewport({
    width: sizeOptions.width,
    height: sizeOptions.height
  });

  await page.goto(`${APP_URL}`, {
    waitUntil: 'load'
  });

  return await login(page, userCredentials);
};

export interface TestFileItem {
  fileName: string;
  path: string;
}

/*
 * Traverse test folder and build a list of files that are testable for mocha
 */
export const traverseFiles = (dir: any, result: TestFileItem[] = []) => {
  fs.readdirSync(dir).forEach((file: string) => {
    // builds full path of file
    const fPath = path.resolve(dir, file);

    // prepare stats obj
    const fileStats = { fileName: file, path: fPath };

    // is the file a directory ?
    // if yes, traverse it also, if no just add it to the result
    if (fs.statSync(fPath).isDirectory()) {
      traverseFiles(fPath, result);
    } else {
      result.push(fileStats);
    }
  });

  return result;
};

/*
 * create instance of Mocha to run tests for the concrete user programmatically
 */
export const createMochaInstance = (roleFolder: string) => {
  const mocha = new Mocha({
    timeout: 12000,
    useColors: true
  });

  const testDir = path.join(__dirname, `./IntegrationTests/${roleFolder}`);

  const files = traverseFiles(testDir);

  files
    .filter((item: TestFileItem) => {
      return item.fileName.substr(-3) === '.ts' && !!item.path;
    })
    .forEach((item: TestFileItem) => {
      mocha.addFile(item.path);
    });

  return mocha;
};

export interface UserTestParams {
  browser: Browser;
  user: string;
  mocha: Mocha;
}

/*
 * Every test suite would have a log in the console,
 * so we could know where something failed
 */
export const makeTestSuitePromise = ({
  browser,
  user,
  mocha
}: UserTestParams) => {
  return new Promise((resolve, reject) => {
    const userCredentials = credentials[user];
    loginBeforeAllTests(browser, userCredentials).then(() => {
      let passCount = 0;
      let failCount = 0;

      return mocha
        .run()
        .on('pass', () => {
          passCount += 1;
        })
        .on('fail', (test: any, err: Error) => {
          console.log(chalkWarning('Test fail'));
          console.log(chalkError(err.message));
          failCount += 1;
        })
        .on('end', () => {
          console.log(chalkInfo(`passCount for ${user} suite ${passCount}`));
          console.log(chalkInfo(`fail count for ${user} suite ${failCount}`));
          if (passCount > 0 && failCount === 0) {
            console.log(chalkOk(`${user.toUpperCase()} SUITE PASSED`));
            resolve();
          } else {
            console.log(chalkError(`${user.toUpperCase()} SUITE FAILED`));
            reject();
          }
        });
    });
  });
};

export interface BrowserMap {
  doctorBrowser?: Browser;
  parentBrowser?: Browser;
  adminBrowser?: Browser;
}

/*
 * all test functions
 * Note that tests for 3 different user types are hold in 3 named folders:
 * 'Doctor', 'Parent', 'Admin'
 */
const main = async () => {
  let mochaInstances: Record<string, Mocha> = {};

  ['Doctor', 'Parent', 'Admin'].forEach((user: string) => {
    const instance = createMochaInstance(user);
    mochaInstances[user] = instance;
  });

  const browsers: BrowserMap = {
    doctorBrowser: undefined,
    parentBrowser: undefined,
    adminBrowser: undefined
  };

  await createChromePool();
  const doctorBrowser = await (global as any).chromepool.acquire(0);
  browsers.doctorBrowser = doctorBrowser;
  const parentBrowser = await (global as any).chromepool.acquire(0);
  browsers.parentBrowser = parentBrowser;
  const adminBrowser = await (global as any).chromepool.acquire(0);
  browsers.adminBrowser = adminBrowser;

  (global as any).BROWSERS = browsers;

  const doctorPromise = makeTestSuitePromise({
    browser: doctorBrowser,
    user: 'Doctor',
    mocha: mochaInstances['Doctor']
  });

  const parentPromise = makeTestSuitePromise({
    browser: parentBrowser,
    user: 'Parent',
    mocha: mochaInstances['Parent']
  });

  const adminPromise = makeTestSuitePromise({
    browser: adminBrowser,
    user: 'Admin',
    mocha: mochaInstances['Admin']
  });

  return Promise.all([doctorPromise, parentPromise, adminPromise]);
};

main()
  .then(() => {
    console.log(chalkOk('Main success'));
    destroyChromePool();
    process.exit(0);
  })
  .catch(() => {
    console.log(chalkError('Main error'));
    process.exit(1);
  });
