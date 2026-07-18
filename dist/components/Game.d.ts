import type { Camera } from "./Camera.js";
import type { World } from "./World.js";
export type GameConfig = {
    world: World;
    camera: Camera;
};
export declare class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected world: World;
    protected camera: Camera;
    constructor(config: GameConfig);
    handleInput(): void;
    update(): void;
    render(): void;
}
//# sourceMappingURL=Game.d.ts.map