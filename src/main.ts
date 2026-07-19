import { Camera } from "./components/Camera";
import { Game } from "./components/Game";
import { GameEngine } from "./components/GameEngine";
import { ImageManager } from "./components/ImageManager";
import { World } from "./components/World";
import { GAME_BASE_TILE, GAME_COLS, GAME_ROWS } from "./constants";
import { backgroundLayer } from "./layers";
import { ImageAssets } from "./resources";

// register assets
const imageManager = new ImageManager();

imageManager.loadAssets(ImageAssets);

// setup world
const world = new World({
  cols: GAME_COLS,
  rows: GAME_ROWS,
  tileSize: GAME_BASE_TILE,
  layers: [{ assetName: "background", layerArray: backgroundLayer }],
  imageManager,
});

// setup camera
const camera = new Camera();

// setup game
const rpg = new Game({ world, camera });

// setup game engine
const engine = new GameEngine(rpg);

// start game
engine.start();
