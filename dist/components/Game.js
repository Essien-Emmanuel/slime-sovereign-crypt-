import { GAME_HEIGHT, GAME_WIDTH } from "../constants.js";
export class Game {
    canvas;
    ctx;
    world;
    camera;
    constructor(config) {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        this.world = config.world;
        this.camera = config.camera;
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
    }
    handleInput() { }
    update() {
        // console.log("updating...");
    }
    render() {
        // console.log("rendering...");
        // this.world.draw(this.canvas, this.ctx);
        this.world.drawLayers(this.ctx, "background");
        // this.world.drawGrid(this.ctx);
    }
}
//# sourceMappingURL=Game.js.map