import Team from '../classes/team';
import Character from '../classes/character';

const archer = new Character('archer');
const mag = new Character('mag');
const warrior = new Character('war');
const dead = new Character('dead');

test('team add character error', () => {
  const myTeam = new Team();
  myTeam.add(archer);

  expect(() => myTeam.add(archer)).toThrow('Такой персонаж уже есть!');
});

test('one copy character in team', () => {
  const myTeam = new Team();
  myTeam.add(archer);
  myTeam.addAll(archer, mag, warrior, dead);

  expect(myTeam.members.size).toEqual(4);
});

test('team convert to array', () => {
  const myTeam = new Team();
  myTeam.addAll(archer, mag, warrior, dead);

  expect(Array.isArray(myTeam.toArray())).toEqual(true);
});
