import Character from './character';

export default class Bowerman extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Bowman';
    this.attack = attack;
    this.defence = defence;
  }
}
