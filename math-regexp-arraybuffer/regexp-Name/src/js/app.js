import Validator from './validator';

const user = new Validator('User-login_000rus');

console.log('app worked');
console.log(user.validateUsername());
