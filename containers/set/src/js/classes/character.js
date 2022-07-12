export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('not correct name!!!');
    }
    this.health = 100;
    this.level = 1;
  }
}
