import Undead from '../classes/undead';

test('should class name === string', () => {
  const hero = new Undead('vampire');
  expect(hero.name).toBe('vampire');
});

test('should class error', () => {
  expect(() => new Undead(5)).toThrow('not correct name!!!');
});
