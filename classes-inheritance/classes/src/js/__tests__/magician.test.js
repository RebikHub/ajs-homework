import Magician from '../classes/magician';

test('should class name === string', () => {
  const hero = new Magician('wizard');
  expect(hero.name).toBe('wizard');
});

test('should class error', () => {
  expect(() => new Magician(5)).toThrow('not correct name!!!');
});
