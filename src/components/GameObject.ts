import type {
  GameObjectConfig,
  GameObjectPosition,
  GameObjectSprite,
} from "../types";
import type { Game } from "./Game";

export class GameObject {
  public game: Game;
  protected position: GameObjectPosition;
  protected sprite: GameObjectSprite;
  protected scale: number;
  protected width: number;
  protected height: number;
  protected visibility: boolean;

  constructor(config: GameObjectConfig) {
    const { visibility, position, width, height, scale, sprite, game } = config;

    this.game = game;
    this.position = position ?? { x: 0, y: 0 };
    this.sprite = sprite ?? {};
    this.width = width;
    this.height = height;
    this.scale = scale ?? 1;
    this.visibility = visibility ?? true;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.visibility) return;
    console.log(this.sprite.x, this.sprite.w, this.sprite.x * this.sprite.w);
    ctx.drawImage(
      this.sprite.image,
      this.sprite.x * this.sprite.w,
      this.sprite.y * this.sprite.h,
      this.sprite.w,
      this.sprite.h,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }
}
