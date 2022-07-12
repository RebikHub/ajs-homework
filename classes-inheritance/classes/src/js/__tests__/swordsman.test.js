import Swordsman from '../classes/swordsman';

test('should class name === string', () => {
  const hero = new Swordsman('warrior');
  expect(hero.name).toBe('warrior');
});

test('should class error', () => {
  expect(() => new Swordsman(5)).toThrow('not correct name!!!');
});
