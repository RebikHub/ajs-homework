import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (this._items.length === 0) {
            this._items.push(item);
        } else if (!this._items.some((e) => e.id === item.id)) {
            this._items.push(item);
        } else {
            this._items.forEach((e,i) => {
                if (e.id === item.id) {
                this.addAmount(i);
            }
        })
        }
    }

    addAmount(index: number): void {
        this._items[index].amount! += 1;
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summWithoutDiscount(): number {
        return this._items.reduce((a: number, b: Buyable) => b.amount ? a + b.price * b.amount : a + b.price, 0);
    }

    summWithDiscount(discount: number): number {
        return this.summWithoutDiscount() - discount;
    }

    removeItem(id: number): void {
        for (let i = 0; i< this._items.length; i++) {
            if (this._items[i].id === id && this._items[i].amount! > 1) {
                this._items[i].amount! -= 1;
            } else if (this._items[i].id === id) this._items.splice(i,1)
        }
    }
}