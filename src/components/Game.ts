import { GAME_HEIGHT, GAME_WIDTH } from "../constants";
import type { Camera } from "./Camera";
import type { World } from "./World";

export type GameConfig = {
  world: World;
  camera: Camera;
};

export class Game {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected world: World;
  protected camera: Camera;

  constructor(config: GameConfig) {
    this.canvas = document.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;

    this.ctx.imageSmoothingEnabled = false;

    this.world = config.world;
    this.camera = config.camera;

    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
  }

  handleInput() {}

  update() {
    // console.log("updating...");
  }

  render() {
    // console.log("rendering...");
    this.world.draw(this.canvas, this.ctx);
    this.world.drawGrid(this.ctx);
  }
}
