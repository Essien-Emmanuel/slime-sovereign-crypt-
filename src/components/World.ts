export type WorldConfig = {
  rows: number;
  cols: number;
  tileSize: number;
  layers: Record<string, number[]>;
};

export class World {
  protected tileSize: number;
  protected cols: number;
  protected rows: number;
  protected layers: WorldConfig["layers"];

  constructor(config: WorldConfig) {
    this.tileSize = config.tileSize;
    this.cols = config.cols;
    this.rows = config.rows;
    this.layers = config.layers;
  }

  drawGrid(ctx: CanvasRenderingContext2D) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        ctx.fillRect(
          this.tileSize * col,
          this.tileSize * row,
          this.tileSize,
          this.tileSize,
        );
      }
    }
  }

  draw() {}
}
