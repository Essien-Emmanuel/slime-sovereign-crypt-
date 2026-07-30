import type { GameObjectConfig } from "../types/index.js";
import type { Camera } from "./Camera.js";
import type { Input } from "./Input.js";
import { Player } from "./Player.js";
import type { World } from "./World.js";
export type GameConfig = {
    world: World;
    camera: Camera;
    player: Omit<GameObjectConfig, "game">;
    input: Input;
};
export declare class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    world: World;
    camera: Camera;
    player: Player;
    input: Input;
    constructor(config: GameConfig);
    handleInput(): void;
    update(): void;
    render(): void;
}
//# sourceMappingURL=Game.d.ts.map