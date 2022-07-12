import Daemon from './classes/daemon';

const hero = new Daemon('demon');
hero.attack = 100;
hero.stoned = true;
hero.distance = 2;
console.log('app worked');
console.log(hero);
console.log(hero.attack);
console.log(hero.stoned);
