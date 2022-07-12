export default class Validator {
  constructor(numbers) {
    this.numbers = numbers;
  }

  validatePhoneNumbers() {
    const phone = this.numbers;
    const valid = phone.replace(/[^\d]/g, '');

    if (valid.length > 11) {
      return valid.replace(/^(8|7)/, '+8');
    }
    return valid.replace(/^(8|7)/, '+7');
  }
}
