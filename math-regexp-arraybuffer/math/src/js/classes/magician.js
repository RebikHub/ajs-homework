/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Daemon extends Range {
  constructor(name, attack = 10, defence = 40) {
    super(name);
    this.type = 'Magician';
    this.attack = attack;
    this.defence = defence;
  }
}
