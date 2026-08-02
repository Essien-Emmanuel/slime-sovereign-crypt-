import { GAME_HEIGHT, GAME_WIDTH } from "../constants.js";
import { Player } from "./Player.js";
export class Game {
    canvas;
    ctx;
    world;
    camera;
    player;
    input;
    constructor(config) {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        const self = this;
        this.world = config.world;
        this.camera = config.camera;
        this.input = config.input;
        this.player = new Player({
            ...config.player,
            game: self,
        });
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
    }
    handleInput() { }
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
//# sourceMappingURL=Game.js.map