const { reloadApp } = require('detox-expo-helpers');

describe('react-native-sample', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('Should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
