const sizeOptions = {
  width: 1424,
  height: 920
};

const args = [
  "--ignore-certificate-errors", /* This argument allows Chromium to ignore HTTPS certificates errors if you have local https */
  "--disable-gpu",
  "--disable-setuid-sandbox",
  "--no-sandbox",
];

// same behavior with headless false
const options = {
  args,
  headless: false,
  devtools: false,
  rs: true,
};

const APP_URL = "http://localhost:8080";

module.exports = {
  config: {
    options,
    APP_URL,
    sizeOptions,
  },
};
