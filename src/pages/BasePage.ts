const selectors = require('../selectors/selector-map.json');

export default class BasePage {
    get logo() : WebdriverIO.Element {
        return browser.$(selectors.basePage.logo);
    }

    waitUntilPageIsLoaded(): boolean {
        browser.waitUntil(() => !!this.logo.waitForDisplayed);
        return this.logo.isDisplayed();
    }
}
