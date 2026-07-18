import { Camera } from "./components/Camera.js";
import { Game } from "./components/Game.js";
import { GameEngine } from "./components/GameEngine.js";
import { ImageManager } from "./components/ImageManager.js";
import { World } from "./components/World.js";
import { GAME_BASE_TILE, GAME_COLS, GAME_ROWS } from "./constants.js";
import { backgroundLayer } from "./layers.js";
// register assets
const imageManager = new ImageManager();
const baseWorldTile = "baseWorldTile";
imageManager.register({
    name: baseWorldTile,
    src: "src/assets/base_world_tile.png",
});
// setup world
const world = new World({
    cols: GAME_COLS,
    rows: GAME_ROWS,
    tileSize: GAME_BASE_TILE,
    layers: [{ assetName: baseWorldTile, layerArray: backgroundLayer }],
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
//# sourceMappingURL=main.js.map