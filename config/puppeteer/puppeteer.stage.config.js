const sizeOptions = {
  width: 1424,
  height: 920
};

const args = [
  "--ignore-certificate-errors", /* This argument allows Chromium to ignore HTTPS certificates errors and process to our unsafe site :) */
  "--disable-gpu",
  "--disable-setuid-sandbox",
  "--no-sandbox",
];

// same behavior with headless false
const options = {
  args,
  devtools: false,
  headless: true,
};

const APP_URL = "https://my-app.com";

module.exports = {
  config: {
    options,
    APP_URL,
    sizeOptions,
  },
};
