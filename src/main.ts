import { Game } from "./components/Game";
import { GameEngine } from "./components/GameEngine";

const rpg = new Game();
const engine = new GameEngine(rpg);
console.log("here in jsm");
engine.start();
