import Validator from '../validator';

test('validate number 8 (927) 000-00-00 -> +79270000000', () => {
  const phone = new Validator('8(927)000-00-00');

  expect(phone.validatePhoneNumbers()).toEqual('+79270000000');
});

test('validate number +7 960 000 00 00 -> +79600000000', () => {
  const phone = new Validator('+7 960 000 00 00');

  expect(phone.validatePhoneNumbers()).toEqual('+79600000000');
});

test('validate number +86 000 000 0000 -> +860000000000', () => {
  const phone = new Validator('86 000 000 0000');

  expect(phone.validatePhoneNumbers()).toEqual('+860000000000');
});
