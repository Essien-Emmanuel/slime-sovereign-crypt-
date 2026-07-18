export class World {
    tileSize;
    cols;
    rows;
    layers;
    imageManager;
    constructor(config) {
        this.tileSize = config.tileSize;
        this.cols = config.cols;
        this.rows = config.rows;
        this.layers = config.layers;
        this.imageManager = config.imageManager;
    }
    drawGrid(ctx) {
        ctx.strokeStyle = "white";
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                ctx.strokeRect(this.tileSize * col, this.tileSize * row, this.tileSize, this.tileSize);
            }
        }
    }
    drawLayers() { }
    draw(canvas, ctx) {
        const baseWorldTileImage = this.imageManager.library["baseWorld"];
        if (baseWorldTileImage) {
            ctx.drawImage(baseWorldTileImage.element, 0, 0, canvas.width, canvas.height);
        }
    }
}
//# sourceMappingURL=World.js.map