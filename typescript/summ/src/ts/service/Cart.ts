import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summWithoutDiscount(): number {
        return this._items.reduce((a: number, b: Buyable) => a + b.price, 0);
    }

    summWithDiscount(discount: number): number {
        return this.summWithoutDiscount() - discount;
    }

    removeItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}