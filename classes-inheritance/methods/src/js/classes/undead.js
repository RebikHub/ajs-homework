import Character from './character';

export default class Undead extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = attack;
    this.defence = defence;
  }
}
