import Game from "./game.js";
import GameSavingData from "./game.js";
import { readGameSaving as loadGame } from "./game.js";
import { writeGameSaving as saveGame } from "./game.js";


const game = new Game();

game.start();
