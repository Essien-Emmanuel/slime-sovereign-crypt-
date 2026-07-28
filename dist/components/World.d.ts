import type { ImageManager } from "./ImageManager.js";
export type WorldConfig = {
    rows: number;
    cols: number;
    tileSize: number;
    layers: {
        layerName: string;
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
    protected isDebugCounted: boolean;
    width: number;
    height: number;
    constructor(config: WorldConfig);
    drawGrid(ctx: CanvasRenderingContext2D): void;
    getTile(layerArray: number[], row: number, col: number): number | undefined;
    drawLayer(ctx: CanvasRenderingContext2D, layerName: string): void;
    drawLayers(ctx: CanvasRenderingContext2D): void;
    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=World.d.ts.map