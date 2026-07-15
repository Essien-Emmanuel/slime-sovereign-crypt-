import type { Game } from "./Game";

export class GameEngine {
  private game: Game;
  constructor(game: Game) {
    this.game = game;
  }

  start() {
    requestAnimationFrame(() => this.loop()); // one way to get the main this context
  }

  loop() {
    this.game.update();
    this.game.render();
    requestAnimationFrame(this.loop.bind(this)); // another way to get the main this context
  }

  pause() {}

  end() {}
}
