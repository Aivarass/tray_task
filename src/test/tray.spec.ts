import { assert } from 'chai';
import LoginPage from '../pages/LoginPage';
import InventoryPage from 'src/pages/InventoryPage';
import CartPage from 'src/pages/CartPage';

const properties = require('../config/properties.json');

describe('Tray.io SDET swag labs test', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;

    before('setup', () => {
        browser.url('/');
        loginPage = new LoginPage();
    });

    it('Login test', () => {
        loginPage.getLoginContainer().should.be.true;
        inventoryPage = loginPage.login(properties.username, properties.password);
        inventoryPage.waitUntilPageIsLoaded().should.be.true;
    });

    it('Sort price by high to low test', () => {
        const itemsAfterSort = inventoryPage.sortItemsOnPage('hilo');
        itemsAfterSort.length.should.be.eq(6);
        itemsAfterSort[0].getPrice.should.be.eq(49.99);
        itemsAfterSort[1].getPrice.should.be.eq(29.99);
        itemsAfterSort[2].getPrice.should.be.eq(15.99);
        itemsAfterSort[3].getPrice.should.be.eq(15.99);
        itemsAfterSort[4].getPrice.should.be.eq(9.99);
        itemsAfterSort[5].getPrice.should.be.eq(7.99);
    });

    it('Add two cheapest items to cart test', () => {
        inventoryPage.addTwoCheapestItemsToCart();
        cartPage = inventoryPage.openCart();
        cartPage.waitUntilPageIsLoaded().should.be.true;
        const cartItemsBeforeRemove = cartPage.getCurrentCartItems();
        cartItemsBeforeRemove.length.should.be.eq(2);
        cartItemsBeforeRemove[0].getPrice.should.be.eq(7.99);
        cartItemsBeforeRemove[1].getPrice.should.be.eq(9.99);
    });

    it('Remove cheapest item from the cart', () => {
        const cartItemsAfterRemove = cartPage.removeCheapestItem();
        cartItemsAfterRemove.length.should.be.eq(1);
        cartItemsAfterRemove[0].getPrice.should.be.eq(9.99);
        cartPage.clickCheckout();
    });
});
