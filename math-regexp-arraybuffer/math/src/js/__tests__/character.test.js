import Character from '../classes/character';

test('should class name === string', () => {
  const hero = new Character('archer');
  expect(hero.name).toBe('archer');
});

test('should class error', () => {
  expect(() => new Character(5)).toThrow('not correct name!!!');
});
