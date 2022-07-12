import Buyable from './Buyable';

export default class Gadgets implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly amount: number = 1,
    ) { }
}