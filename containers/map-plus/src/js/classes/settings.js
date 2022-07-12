export default class Settings {
  constructor(theme = 'dark', music = 'trance', difficulty = 'easy') {
    this.default = new Map([
      ['theme', theme],
      ['music', music],
      ['difficulty', difficulty],
    ]);
  }

  get() {
    return this.default;
  }
}
