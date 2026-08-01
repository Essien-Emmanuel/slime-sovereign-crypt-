import type { GameObjectConfig } from "../types/index.js";
import { GameObject } from "./GameObject.js";
export declare class Player extends GameObject {
    private moving;
    private speed;
    constructor(config: GameObjectConfig);
    update(): void;
}
//# sourceMappingURL=Player.d.ts.map