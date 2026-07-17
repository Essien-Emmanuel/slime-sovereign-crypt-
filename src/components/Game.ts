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

    this.world = config.world;
    this.camera = config.camera;

    this.canvas.width = 300;
    this.canvas.height = 200;
  }

  handleInput() {}

  update() {
    // console.log("updating...");
  }

  render() {
    // console.log("rendering...");
    this.world.drawGrid(this.ctx);
    this.ctx.fillRect(10, 10, 20, 20);
  }
}
