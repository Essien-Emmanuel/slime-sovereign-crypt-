import type { ImageManager } from "./ImageManager";

export type WorldConfig = {
  rows: number;
  cols: number;
  tileSize: number;
  layers: { assetName: string; layerArray: number[] }[];
  imageManager: ImageManager;
};

export class World {
  protected tileSize: number;
  protected cols: number;
  protected rows: number;
  protected layers: WorldConfig["layers"];
  protected imageManager: WorldConfig["imageManager"];

  constructor(config: WorldConfig) {
    this.tileSize = config.tileSize;
    this.cols = config.cols;
    this.rows = config.rows;
    this.layers = config.layers;
    this.imageManager = config.imageManager;
  }

  drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "white";
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        ctx.strokeRect(
          this.tileSize * col,
          this.tileSize * row,
          this.tileSize,
          this.tileSize,
        );
      }
    }
  }

  drawLayers() {}

  draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const baseWorldTileImage = this.imageManager.library["baseWorldTile"];
    console.log(baseWorldTileImage);

    if (baseWorldTileImage) {
      ctx.drawImage(
        baseWorldTileImage.element,
        0,
        0,
        canvas.width,
        canvas.height,
      );
    }
  }
}
