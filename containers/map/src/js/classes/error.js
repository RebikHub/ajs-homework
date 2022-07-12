export default class ErrorRepository {
  constructor() {
    this.repo = new Map();
  }

  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    }
    throw new Error('Unknown error');
  }
}
