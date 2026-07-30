import { Camera } from "./components/Camera";
import { Game } from "./components/Game";
import { GameEngine } from "./components/GameEngine";
import type { GameObject } from "./components/GameObject";
import { ImageManager } from "./components/ImageManager";
import { Input } from "./components/Input";
import { Player } from "./components/Player";
import { World } from "./components/World";
import { GAME_BASE_TILE, GAME_COLS, GAME_ROWS } from "./constants";
import { floorLayer, wallLayer } from "./layers";
import { ImageAssets } from "./resources";
import type { GameObjectConfig } from "./types";

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
  const player: Omit<GameObjectConfig, "game"> = {
    position: { x: 0, y: 0 },
    height: 64,
    width: 64,
    scale: 1,
    sprite: {
      x: 0,
      y: 10,
      w: 64,
      h: 64,
      image: imageManager.getAsset("hero")?.element!,
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
