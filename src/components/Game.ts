import { GAME_HEIGHT, GAME_WIDTH } from "../constants";
import type { GameObjectConfig } from "../types";
import type { Camera } from "./Camera";
import type { Input } from "./Input";
import { Player } from "./Player";
import type { World } from "./World";

export type GameConfig = {
  world: World;
  camera: Camera;
  player: Omit<GameObjectConfig, "game">;
  input: Input;
};

export class Game {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  public world: World;
  public camera: Camera;
  public player: Player;
  public input: Input;

  constructor(config: GameConfig) {
    this.canvas = document.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;

    this.ctx.imageSmoothingEnabled = false;

    const self = this;
    this.world = config.world;
    this.camera = config.camera;
    this.input = config.input;
    this.player = new Player({
      ...(config.player as GameObjectConfig),
      game: self,
    });

    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
  }

  handleInput() {}

  update() {
    // console.log("updating...");
    this.player.update();
  }

  render() {
    this.ctx.clearRect(0, 0, this.world.width, this.world.height);
    this.world.draw(this.ctx);
    // this.world.drawGrid(this.ctx);
    this.player.drawDestBox(this.ctx);
    this.player.draw(this.ctx);

    // this.world.drawImage(this.canvas, this.ctx);
  }
}
