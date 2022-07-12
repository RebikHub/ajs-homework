import Zombie from '../classes/zombie';

test('should class name === string', () => {
  const hero = new Zombie('shon');
  expect(hero.name).toBe('shon');
});

test('should class error', () => {
  expect(() => new Zombie(5)).toThrow('not correct name!!!');
});
