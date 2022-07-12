import Character from './character';

export default class Zombie extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = attack;
    this.defence = defence;
  }
}
