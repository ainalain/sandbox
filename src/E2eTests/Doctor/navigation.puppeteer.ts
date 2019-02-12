import { expect } from 'chai';
import { Page } from 'puppeteer';

import * as config from '../../../config/puppeteer/puppeteer.config.js';
import { UserTypes } from '../testUtils/puppeteer.data';

describe('Doctor AppBar navigation', () => {
  let page: Page;
  before(async () => {
    const browser = (global as any).BROWSERS[UserTypes.Doctor];

    page = await browser.newPage();

    await page.setViewport({
      width: config.sizeOptions.width,
      height: config.sizeOptions.height
    });

    await page.goto(`${config.APP_URL}`, {
      waitUntil: 'load'
    });
  });

  it('Add appointment button leads doctor to /new-appointment page', async () => {
    page.waitForNavigation({ waitUntil: 'load' });

    const appointmentsLinkSelector = '[data-id="createNewAppointment"]';

    await page.waitForSelector(appointmentsLinkSelector);

    await page.click(appointmentsLinkSelector);

    const newUrl = await page.evaluate('location.href');

    expect(newUrl).to.equal(`${config.APP_URL}/new-appointment`);
  });

  it('Back X button leads doctor from /new-appointment to /patient page', async () => {
    page.waitForNavigation({ waitUntil: 'load' });

    const backToPatientLinkSelector = '[data-id="backToPatientLink"]';

    await page.waitForSelector(backToPatientLinkSelector);

    await page.click(backToPatientLinkSelector);

    const newUrl = await page.evaluate('location.href');

    expect(newUrl).to.contain(`${config.APP_URL}/patient`);
  });
});
