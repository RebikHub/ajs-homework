import Bowerman from '../classes/bowerman';

test('should class name === string', () => {
  const hero = new Bowerman('archer');
  expect(hero.name).toBe('archer');
});

test('should class error', () => {
  expect(() => new Bowerman(5)).toThrow('not correct name!!!');
});
