import Magician from '../classes/magician';
import Daemon from '../classes/daemon';

test('should log2 attack', () => {
  const hero = new Daemon('demon');
  hero.attack = 100;
  hero.stoned = true;
  hero.distance = 2;
  expect(hero.attack).toBe(85);
});

test('should rangeAttack', () => {
  const hero = new Magician('mag');
  hero.attack = 100;
  hero.distance = 2;
  expect(hero.attack).toBe(90);
});

test('should stoned false', () => {
  const hero = new Daemon('demon');
  hero.stoned = false;
  expect(hero.stoned).toBe(false);
});

test('should stoned true', () => {
  const hero = new Magician('mag');
  hero.stoned = true;
  expect(hero.stoned).toBe(true);
});

test('attack base', () => {
  const hero = new Daemon('demon');
  expect(hero.attack).toBe(10);
});

test('attack base', () => {
  const hero = new Magician('mag');
  expect(hero.attack).toBe(10);
});
