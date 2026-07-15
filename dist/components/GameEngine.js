export class GameEngine {
    game;
    constructor(game) {
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
    pause() { }
    end() { }
}
//# sourceMappingURL=GameEngine.js.map