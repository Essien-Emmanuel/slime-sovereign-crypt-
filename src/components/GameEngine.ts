import type { Game } from "./Game.js";

export class GameEngine {
  private game: Game;
  constructor(game: Game) {
    this.game = game;
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop() {
    this.game.update();
    this.game.render();
    requestAnimationFrame(this.loop);
  }

  pause() {}

  end() {}
}
