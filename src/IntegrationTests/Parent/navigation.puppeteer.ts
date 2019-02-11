import { expect } from 'chai';
import { Page } from 'puppeteer';

import * as config from '../../../config/puppeteer/puppeteer.config';

/*
 * This is an example and boilerplate for your automated tests on Puppeteer and Mocha.
 * Note: there is no described functionality within this app, test files are only
 * used for illustration of set up process.
 */
describe('Parent SideMenu navigation', () => {
  let page: Page;
  before(async () => {
    const browser = (global as any).BROWSERS.parentBrowser;

    page = await browser.newPage();

    await page.setViewport({
      width: config.sizeOptions.width,
      height: config.sizeOptions.height
    });

    await page.goto(`${config.APP_URL}`, {
      waitUntil: 'load'
    });
  });

  it('Appointments menu link leads parent to /appointments page', async () => {
    page.waitForNavigation({ waitUntil: 'load' });

    const appointmentsLinkSelector = '[data-id="appointmentsMenuLink"]';

    await page.waitForSelector(appointmentsLinkSelector);

    await page.click(appointmentsLinkSelector);

    const newUrl = await page.evaluate('location.href');

    expect(newUrl).to.contain(`${config.APP_URL}/appointments`);
  });

  it('Tests menu link leads parent to /tests page', async () => {
    page.waitForNavigation({ waitUntil: 'load' });

    const testsPageLinkSelector = '[data-id="testsPageLink"]';

    await page.waitForSelector(testsPageLinkSelector);

    await page.click(testsPageLinkSelector);

    const newUrl = await page.evaluate('location.href');

    expect(newUrl).to.contain(`${config.APP_URL}/tests`);
  });
});
