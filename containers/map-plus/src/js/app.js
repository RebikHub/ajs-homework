import Settings from './classes/settings';

const player = new Settings();
const player2 = new Settings('light', 'pop', 'normal');

console.log('app worked');
console.log(player.get());
console.log(player2.get());
