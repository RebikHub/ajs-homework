import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log('app worked');
