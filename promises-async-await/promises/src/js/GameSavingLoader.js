import read from './reader';
import json from './parser';
import GameSaving from './GamaSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((value) => json(value)
        .then((resolve) => {
          const data = JSON.parse(resolve);
          return new GameSaving(data);
        }));
  }
}
