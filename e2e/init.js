require('babel-polyfill');
const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  await detox.init(config);
  // await element(by.label('Got it')).tap();
});

after(async () => {
  await detox.cleanup();
});