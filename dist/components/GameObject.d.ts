import type { GameObjectConfig, GameObjectPosition, GameObjectSprite } from "../types/index.js";
import type { Game } from "./Game.js";
export declare class GameObject {
    game: Game;
    protected position: GameObjectPosition;
    protected sprite: GameObjectSprite;
    protected scale: number;
    protected width: number;
    protected height: number;
    protected visibility: boolean;
    constructor(config: GameObjectConfig);
    draw(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=GameObject.d.ts.map