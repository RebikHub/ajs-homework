import Character from './character';

export default class Swordsman extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = attack;
    this.defence = defence;
  }
}
