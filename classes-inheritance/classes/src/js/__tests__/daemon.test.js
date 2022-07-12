import Daemon from '../classes/daemon';

test('should class name === string', () => {
  const hero = new Daemon('demon');
  expect(hero.name).toBe('demon');
});

test('should class error', () => {
  expect(() => new Daemon(5)).toThrow('not correct name!!!');
});
