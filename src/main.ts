import { Camera } from "./components/Camera";
import { Game } from "./components/Game";
import { GameEngine } from "./components/GameEngine";
import { World } from "./components/World";

const world = new World({ cols: 17, rows: 15, tileSize: 32, layers: {} });
const camera = new Camera();
const rpg = new Game({ world, camera });
const engine = new GameEngine(rpg);

engine.start();
