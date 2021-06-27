import BasePage from './BasePage';
import CartPage from './CartPage';
import { InventoryItem } from '../model/InventoryItem';

const selectors = require('../selectors/selector-map.json');

export default class InventoryPage extends BasePage {
    private inventoryItemsArray: InventoryItem[] = [];

    constructor() {
        super();
    }
    get shoppingCart() : WebdriverIO.Element {
        return browser.$(selectors.inventory.shoppingCart);
    }
    get inventoryItems() : WebdriverIO.ElementArray {
        return browser.$$(selectors.inventory.inventoryItem);
    }
    get inventoryContainer() : WebdriverIO.Element {
        return browser.$(selectors.inventory.inventoryContainer);
    }
    get selector() : WebdriverIO.Element {
        return browser.$(selectors.inventory.selectContainer);
    }

    sortItemsOnPage(option): InventoryItem[] {
        const sortItemArray: InventoryItem[] = [];
        this.selector.selectByAttribute('value', option);
        this.inventoryItems.forEach((item) => {
            sortItemArray.push(new InventoryItem(item.$(selectors.inventoryItem.price).getText(), item));
        });
        return sortItemArray;
    }

    getInventoryItemsAndSort() {
        this.inventoryItems.forEach((item) => {
            this.inventoryItemsArray.push(new InventoryItem(item.$(selectors.inventoryItem.price).getText(), item));
        });
        this.inventoryItemsArray.sort((a, b) => {
            return a.getPrice - b.getPrice;
        });
    }

    addTwoCheapestItemsToCart() {
        this.getInventoryItemsAndSort();
        if (this.inventoryItemsArray.length > 1) {
            this.inventoryItemsArray[0].getElement.$(selectors.inventoryItem.addToCartButton).click();
            this.inventoryItemsArray[1].getElement.$(selectors.inventoryItem.addToCartButton).click();
        }
    }

    openCart() : CartPage {
        this.shoppingCart.waitForClickable();
        this.shoppingCart.click();
        return new CartPage();
    }

}
