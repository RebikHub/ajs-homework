import Validator from './validator';

const phone1 = new Validator('8(927)000-00-00');
const phone2 = new Validator('+7 960 000 00 00');
const phone3 = new Validator('86 000 000 0000');

console.log('app worked');
console.log(phone1.validatePhoneNumbers());
console.log(phone2.validatePhoneNumbers());
console.log(phone3.validatePhoneNumbers());
