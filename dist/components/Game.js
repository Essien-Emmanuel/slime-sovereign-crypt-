export class Game {
    canvas;
    ctx;
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 300;
        this.canvas.height = 200;
    }
    handleInput() { }
    update() {
        // console.log("updating...");
    }
    render() {
        // console.log("rendering...");
        this.ctx.fillRect(10, 10, 20, 20);
    }
}
//# sourceMappingURL=Game.js.map