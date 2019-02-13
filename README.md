This is my pet project for experiments with front-end technologies and libraries and also a demo repository for my articles.

## Available Scripts

### Start the app

Run `yarn` and `yarn start` for a dev mode.

(You can also use `npm install` and `npm start` as your node scripts.)

Navigate to [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

### Run tests

There are 3 scripts for running end-to-end tests in the `package.json` file:

- `puppeteer`: will run tests locally on Mac or Linux;
- `puppeteer:windows`: will run tests locally on Windows;
- `puppeteer:stage` will run tests in Gitlab CI using a bit different config.

## Purpose and features

`puppeteer-and-mocha-boilerplate` branch currently contains a boilerplate for writing end-to-end tests with Puppeteer and Mocha.

There is no full example of a working app, this branch is used as a code source for my article. 

The main interest represents `main.puppeteer.ts` file: it's a setup of end-to-end tests suites where 3 browser instances are running scripts for 3 different users. If you want to know more about my motivation and this setup details, you can read [this article.](https://medium.com/@elenasufieva/set-up-end-to-end-tests-with-puppeteer-and-mocha-4bb0c24b563a)

Please note that mostly this project works only in a development mode. This is not a production ready project. However, I will be glad to know that it helped you in some way.

Feel free to fork it or to use some pieces of its code in your projects.
