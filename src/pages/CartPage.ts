import BasePage from './BasePage';
import { InventoryItem } from '../model/InventoryItem';

const selectors = require('../selectors/selector-map.json');

export default class CartPage extends BasePage {
    private inventoryItems: InventoryItem[] = [];

    constructor() {
        super();
    }

    get cartItems() : WebdriverIO.ElementArray {
        return browser.$$(selectors.cart.cartItem);
    }
    get checkoutButton() : WebdriverIO.Element {
        return browser.$(selectors.cart.checkoutButton);
    }

    getCartItemsToArray() {
        this.cartItems.forEach((item) => {
            this.inventoryItems.push(new InventoryItem(item.$(selectors.cartItem.price).getText(), item));
        });
    }

    sortCartItems() {
        this.inventoryItems.sort((a, b) => {
            return a.getPrice - b.getPrice;
        });
    }

    removeCheapestItem(): InventoryItem[] {
        this.getCartItemsToArray();
        this.sortCartItems();
        if (this.inventoryItems.length > 0) {
            this.inventoryItems[0].getElement.$(selectors.cartItem.removeButton).click();
        }
        return this.getCurrentCartItems();
    }

    getCurrentCartItems(): InventoryItem[] {
        const currentCartItems: InventoryItem[] = [];
        this.cartItems.forEach((item) => {
            currentCartItems.push(new InventoryItem(item.$(selectors.inventoryItem.price).getText(), item));
        });
        return currentCartItems;
    }

    clickCheckout() {
        this.checkoutButton.click();
    }

}
