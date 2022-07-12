export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const user = this.name;
    if (
      /^[A-Za-z]/.test(user)
      && !/[^\w/-]/.test(user)
      && !/\d{4}/.test(user)
      && /[A-Za-z]$/.test(user)
    ) {
      return true;
    }
    return false;
  }
}
