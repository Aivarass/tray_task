export class InventoryItem {

    private price: number;
    private element: WebdriverIO.Element;

    constructor(price: string, element: WebdriverIO.Element) {
        this.price = this.cleanUpPrice(price);
        this.element = element;
    }

    get getPrice(): number {
        return this.price;
    }

    set setPrice(value: number) {
        this.price = value;
    }

    get getElement(): WebdriverIO.Element {
        return this.element;
    }

    set setElement(value: WebdriverIO.Element) {
        this.element = value;
    }

    private cleanUpPrice(priceString: string) {
        return +priceString.replace('$', '').trim();
    }
}
