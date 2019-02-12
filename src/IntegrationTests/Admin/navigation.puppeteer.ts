import { expect } from 'chai';
import { Page } from 'puppeteer';

import * as config from '../../../config/puppeteer/puppeteer.config.js';
import { UserTypes } from '../testUtils/puppeteer.data';

/*
 * This is an example and boilerplate for your automated tests on Puppeteer and Mocha.
 * Note: there is no described functionality within this app, test files are only
 * used for illustration of set up process.
 */
describe('Admin add doctor navigation', () => {
  let page: Page;
  before(async () => {
    const browser = (global as any).BROWSERS[UserTypes.Admin];

    page = await browser.newPage();

    await page.setViewport({
      width: config.sizeOptions.width,
      height: config.sizeOptions.height
    });

    await page.goto(`${config.APP_URL}`, {
      waitUntil: 'load'
    });
  });

  it('Add doctor button opens dropdown menu', async () => {
    page.waitForNavigation({ waitUntil: 'load' });

    const addDoctorButtonSelector = '[data-id="addDoctorButton"]';

    await page.waitForSelector(addDoctorButtonSelector);
    const buttonText = await page.$eval(
      addDoctorButtonSelector,
      button => button.textContent
    );

    await page.click(addDoctorButtonSelector);

    const addDoctorDropdownMenuSelector = '[data-id="addDoctorDropdown"]';

    await page.waitForSelector(addDoctorDropdownMenuSelector);

    const dropdown = await page.$$(addDoctorDropdownMenuSelector);

    expect(buttonText).to.be.equal('Add doctor');

    expect(dropdown).to.have.lengthOf(1);
  });
});
