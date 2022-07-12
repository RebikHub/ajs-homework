import Game from "../Game/game.js";
import GameSavingData from "../Game/game.js";
import { readGameSaving as loadGame } from "../Game/game.js";
import { writeGameSaving as saveGame } from "../Game/game.js";


const game = new Game();

game.start();
