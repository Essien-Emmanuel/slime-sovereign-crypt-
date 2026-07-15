import { Game } from "./components/Game";
import { GameEngine } from "./components/GameEngine";

const rpg = new Game();
const engine = new GameEngine(rpg);
engine.start();
