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
  public destinationPos: GameObjectPosition;
  public distanceToTravel: GameObjectPosition;

  constructor(config: GameObjectConfig) {
    const { visibility, position, width, height, scale, sprite, game } = config;

    this.game = game;
    this.position = position ?? { x: 0, y: 0 };
    this.sprite = sprite ?? {};
    this.width = width;
    this.height = height;
    this.scale = scale ?? 1;
    this.visibility = visibility ?? true;
    this.destinationPos = { x: this.position.x, y: this.position.y };
    this.distanceToTravel = { x: 0, y: 0 };
  }

  moveTowards(destinationPos: GameObjectPosition, speed: number) {
    this.distanceToTravel.x = destinationPos.x - this.position.x;
    this.distanceToTravel.y = destinationPos.y - this.position.y;

    let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);

    if (distance <= speed) {
      this.position.x = destinationPos.x;
      this.position.y = destinationPos.y;
    } else {
      const stepX = this.distanceToTravel.x / distance;
      const stepY = this.distanceToTravel.y / distance;

      this.position.x += stepX * speed;
      this.position.y += stepY * speed;

      this.distanceToTravel.x = this.destinationPos.x - this.position.x;
      this.distanceToTravel.y = this.destinationPos.y - this.destinationPos.y;

      distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);
    }

    return distance;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.visibility) return;

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
