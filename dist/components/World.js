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
    getTile(layerArray, row, col) {
        return layerArray[this.cols * row + col];
    }
    drawLayers(ctx, layerName) {
        const imageAsset = this.imageManager.library[layerName];
        if (!imageAsset)
            return;
        console.log("here");
        const layer = this.layers.find((layer) => layer.assetName === layerName);
        console.log("layer", layer);
        if (!layer)
            return;
        const layerArray = layer.layerArray;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const tile = this.getTile(layerArray, row, col);
                if (!tile)
                    continue;
                const sx = (tile * this.tileSize) % imageAsset.element.width;
                const sy = Math.floor(tile / imageAsset.element.width) * this.tileSize;
                const sw = this.tileSize;
                const sh = this.tileSize;
                ctx.drawImage(imageAsset.element, sx, sy, sw, sh, col * this.tileSize, row * this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }
    draw(canvas, ctx) {
        const baseWorldTileImage = this.imageManager.library["baseWorld"];
        if (baseWorldTileImage) {
            ctx.drawImage(baseWorldTileImage.element, 0, 0, canvas.width, canvas.height);
        }
    }
}
//# sourceMappingURL=World.js.map