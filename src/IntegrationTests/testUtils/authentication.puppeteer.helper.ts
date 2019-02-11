import { Page } from "puppeteer";

import { Credentials } from "./puppeteer.data";

/* helper function,
 * you need to invoke it before all other tests to get user auth token/cookies.
 * It works with abstract 'LOGIN' page where 2 inputs and a submit button are shown.
 */
export const login = async (page: Page, creds: Credentials) => {
  const usernameSelector = "[data-id=\"username\"]";
  const passwordSelector = "[data-id=\"password\"]";
  await page.waitForSelector(usernameSelector);
  await page.waitForSelector(passwordSelector);

  await page.type(usernameSelector, creds.username);
  await page.type(passwordSelector, creds.password);
  const BUTTON_SELECTOR = "[data-id=\"loginSubmitButton\"]";

  return await page.click(BUTTON_SELECTOR).then(async () => {
    page.waitForNavigation({waitUntil: "load"});
  });
};
