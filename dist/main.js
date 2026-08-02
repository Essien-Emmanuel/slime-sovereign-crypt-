import { Camera } from "./components/Camera.js";
import { Game } from "./components/Game.js";
import { GameEngine } from "./components/GameEngine.js";
import { ImageManager } from "./components/ImageManager.js";
import { Input } from "./components/Input.js";
import { World } from "./components/World.js";
import { GAME_BASE_TILE, GAME_COLS, GAME_ROWS } from "./constants.js";
import { floorLayer, wallLayer } from "./layers.js";
import { ImageAssets } from "./resources.js";
async function initializeGame() {
    // register assets
    const imageManager = new ImageManager();
    await imageManager.loadAssets(ImageAssets);
    // setup world
    const world = new World({
        cols: GAME_COLS,
        rows: GAME_ROWS,
        tileSize: GAME_BASE_TILE,
        layers: [
            { layerName: "floor", assetName: "background", layerArray: floorLayer },
            { layerName: "wall", assetName: "background", layerArray: wallLayer },
        ],
        imageManager,
    });
    // setup camera
    const camera = new Camera();
    // create player
    const player = {
        position: { x: 0, y: 0 },
        height: 64,
        width: 64,
        scale: 1,
        sprite: {
            x: 0,
            y: 10,
            w: 64,
            h: 64,
            image: imageManager.getAsset("hero")?.element,
            maxFrame: 8,
        },
        visibility: true,
    };
    // setup input
    const input = new Input();
    // setup game
    const rpg = new Game({ world, camera, player, input });
    // setup game engine
    const engine = new GameEngine(rpg);
    // start game
    engine.start();
}
initializeGame();
//# sourceMappingURL=main.js.map