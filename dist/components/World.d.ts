import type { ImageManager } from "./ImageManager.js";
export type WorldConfig = {
    rows: number;
    cols: number;
    tileSize: number;
    layers: {
        assetName: string;
        layerArray: number[];
    }[];
    imageManager: ImageManager;
};
export declare class World {
    protected tileSize: number;
    protected cols: number;
    protected rows: number;
    protected layers: WorldConfig["layers"];
    protected imageManager: WorldConfig["imageManager"];
    constructor(config: WorldConfig);
    drawGrid(ctx: CanvasRenderingContext2D): void;
    drawLayers(): void;
    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=World.d.ts.map