import orderByProps from './function';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

console.log('app worked');
console.log(orderByProps(hero, ['name', 'level']));
