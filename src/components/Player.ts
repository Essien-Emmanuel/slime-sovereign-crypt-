import { GAME_BASE_TILE } from "../constants.js";
import type { GameObjectConfig } from "../types/index.js";
import { GameObject } from "./GameObject.js";
import { KEYS } from "./Utils.js";

export class Player extends GameObject {
  private moving: boolean;
  private speed: number;

  constructor(config: GameObjectConfig) {
    super(config);
    this.moving = false;
    this.speed = 2;
  }

  update() {
    let nextX = this.destinationPos.x;
    let nextY = this.destinationPos.y;

    const distance = this.moveTowards(this.destinationPos, this.speed);
    const arrived = distance <= this.speed;

    if (arrived) {
      if (this.game.input.getLastkey === KEYS.UP) {
        this.sprite.y = 8;
        nextY -= GAME_BASE_TILE;
      }

      if (this.game.input.getLastkey === KEYS.DOWN) {
        this.sprite.y = 10;
        nextY += GAME_BASE_TILE;
      }

      if (this.game.input.getLastkey === KEYS.LEFT) {
        this.sprite.y = 9;
        nextX -= GAME_BASE_TILE;
      }

      if (this.game.input.getLastkey === KEYS.RIGHT) {
        this.sprite.y = 11;
        nextX += GAME_BASE_TILE;
      }
    }

    this.destinationPos.x = nextX;
    this.destinationPos.y = nextY;

    if (this.game.input.keys.length > 0) {
      this.moving = true;
    } else {
      this.moving = false;
    }

    if (this.moving) {
      if (this.sprite.x === this.sprite.maxFrame) {
        this.sprite.x = 1;
      } else {
        this.sprite.x++;
      }
    } else {
      this.sprite.x = 0;
    }
  }
}
