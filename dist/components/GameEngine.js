export class GameEngine {
    game;
    constructor(game) {
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
    pause() { }
    end() { }
}
//# sourceMappingURL=GameEngine.js.map