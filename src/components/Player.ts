import type { GameObjectConfig } from "../types/index.js";
import { GameObject } from "./GameObject.js";
import { KEYS } from "./Utils.js";

export class Player extends GameObject {
  private moving: boolean;
  constructor(config: GameObjectConfig) {
    super(config);
    this.moving = false;
  }

  update() {
    if (this.game.input.getLastkey === KEYS.UP) {
      this.sprite.y = 8;
    }

    if (this.game.input.getLastkey === KEYS.DOWN) {
      this.sprite.y = 10;
    }

    if (this.game.input.getLastkey === KEYS.LEFT) {
      this.sprite.y = 9;
    }

    if (this.game.input.getLastkey === KEYS.RIGHT) {
      this.sprite.y = 11;
    }

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
