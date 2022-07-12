import Validator from '../validator';

test('validate == true', () => {
  const user = new Validator('User-login_000rus');

  expect(user.validateUsername()).toEqual(true);
});

test('begin and end validate == false', () => {
  const user = new Validator('1User-login_000rus_');

  expect(user.validateUsername()).toEqual(false);
});

test('numbers in a row validate == false', () => {
  const user = new Validator('1User-login_0000rus_');

  expect(user.validateUsername()).toEqual(false);
});
