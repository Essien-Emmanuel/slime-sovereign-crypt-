import type { GameObjectConfig, GameObjectPosition, GameObjectSprite } from "../types/index.js";
import type { Game } from "./Game.js";
export declare class GameObject {
    game: Game;
    protected position: GameObjectPosition;
    protected sprite: GameObjectSprite;
    protected scale: number;
    protected width: number;
    protected halfWidth: number;
    protected height: number;
    protected visibility: boolean;
    destinationPos: GameObjectPosition;
    distanceToTravel: GameObjectPosition;
    constructor(config: GameObjectConfig);
    moveTowards(destinationPos: GameObjectPosition, speed: number): number;
    drawDestBox(ctx: CanvasRenderingContext2D): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=GameObject.d.ts.map