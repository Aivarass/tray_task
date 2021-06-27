import BasePage from './BasePage';
import InventoryPage from './InventoryPage';

const selectors = require('../selectors/selector-map.json');

export default class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get username() : WebdriverIO.Element {
        return browser.$(selectors.login.usernameLocator);
    }

    get password() : WebdriverIO.Element {
        return browser.$(selectors.login.passwordLocator);
    }

    get loginButton() : WebdriverIO.Element {
        return browser.$(selectors.login.loginButtonLocator);
    }

    get loginContainer() : WebdriverIO.Element {
        return browser.$(selectors.login.loginContainer);
    }

    getLoginContainer(): boolean {
        return this.loginContainer.isDisplayed();
    }

    enterLoginInformation(usernameValue, passwordValue) : void {
        this.username.setValue(usernameValue);
        this.password.setValue(passwordValue);
    }

    clickSubmitButton() : void {
        this.loginButton.click();
    }

    login(usernameValue, passwordValue) : InventoryPage {
        this.enterLoginInformation(usernameValue, passwordValue);
        this.clickSubmitButton();
        return new InventoryPage();
    }
}
