import { GAME_HEIGHT, GAME_WIDTH } from "../constants";
import type { ImageManager } from "./ImageManager";

export type WorldConfig = {
  rows: number;
  cols: number;
  tileSize: number;
  layers: { layerName: string; assetName: string; layerArray: number[] }[];
  imageManager: ImageManager;
};

export class World {
  public tileSize: number;
  protected cols: number;
  protected rows: number;
  protected layers: WorldConfig["layers"];
  protected imageManager: WorldConfig["imageManager"];
  protected isDebugCounted: boolean;
  public width: number;
  public height: number;

  constructor(config: WorldConfig) {
    this.width = GAME_WIDTH;
    this.height = GAME_HEIGHT;
    this.tileSize = config.tileSize;
    this.cols = config.cols;
    this.rows = config.rows;
    this.layers = config.layers;
    this.imageManager = config.imageManager;
    this.isDebugCounted = false;
  }

  drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "white";
    let count = 1;

    ctx.save();
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        ctx.strokeRect(
          this.tileSize * col,
          this.tileSize * row,
          this.tileSize,
          this.tileSize,
        );

        this.isDebugCounted = count === this.cols * this.rows ? true : false;

        // ctx.restore();
        if (!this.isDebugCounted) {
          ctx.font = "10px serif";
          ctx.fillStyle = "black";
          // ctx.fillText(
          //   String(count),
          //   this.tileSize * col,
          //   this.tileSize * (row + 1),
          // );
          count++;
        } else {
          count = 1;
        }
      }
    }
  }

  getTile(layerArray: number[], row: number, col: number) {
    return layerArray[this.cols * row + col];
  }

  drawLayer(ctx: CanvasRenderingContext2D, layerName: string) {
    const layer = this.layers.find((layer) => layer.layerName === layerName);
    if (!layer) return;

    const imageAsset = this.imageManager.library[layer.assetName];
    if (!imageAsset) return;

    const layerArray = layer.layerArray;

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const tile = this.getTile(layerArray, row, col);
        if (typeof tile !== "number") continue;

        const ImageCols = imageAsset.element.width / this.tileSize;

        const sx = ((tile - 1) * this.tileSize) % imageAsset.element.width;
        const sy = Math.floor((tile - 1) / ImageCols) * this.tileSize;
        const sw = this.tileSize;
        const sh = this.tileSize;

        ctx.drawImage(
          imageAsset.element,
          sx,
          sy,
          sw,
          sh,
          col * this.tileSize,
          row * this.tileSize,
          this.tileSize,
          this.tileSize,
        );
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.drawLayer(ctx, "floor");
    this.drawLayer(ctx, "wall");
  }

  drawImage(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const baseWorldTileImage = this.imageManager.library["background"];

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
