const devConfig = require("./puppeteer.dev.config");
const stageConfig = require("./puppeteer.stage.config");

module.exports = process.env.NODE_ENV === "stage"
  ? stageConfig.config
  : devConfig.config;
