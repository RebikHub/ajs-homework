import Character from '../classes/character';
import Bowerman from '../classes/bowerman';

test('should class name === string', () => {
  const hero = new Character('archer');
  expect(hero.name).toBe('archer');
});

test('should class error', () => {
  expect(() => new Character(5)).toThrow('not correct name!!!');
});

test('should lavel up', () => {
  const archer = new Bowerman('archer');
  archer.levelUp();
  const expected = {
    name: 'archer',
    health: 100,
    level: 2,
    type: 'Bowman',
    attack: 30,
    defence: 30,
  };
  expect(archer).toEqual(expected);
});

test('should level up error', () => {
  const hero = new Character('hero', 0);
  expect(() => hero.levelUp()).toThrow('The deceased cannot be leveled!!!');
});

test('should valid damage', () => {
  const archer = new Bowerman('arher');
  archer.damage(10);
  expect(archer.health).toBeCloseTo(92.5);
});

test('should damage if health === 0', () => {
  const archer = new Bowerman('arher', -10);
  archer.damage(10);
  expect(archer.health).toBeCloseTo(-10);
});
