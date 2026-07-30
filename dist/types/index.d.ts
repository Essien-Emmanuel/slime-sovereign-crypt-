import type { Game } from "../components/Game.js";
export type AssetLibraryValue<T extends HTMLImageElement | HTMLAudioElement> = {
    element: T;
    isLoaded: boolean;
    name: string;
};
export type AssetMetadata = {
    name: string;
    src: string;
};
export type GameObjectPosition = {
    x: number;
    y: number;
};
export type GameObjectSprite = {
    x: number;
    y: number;
    w: number;
    h: number;
    image: HTMLImageElement;
    maxFrame: number;
};
export type GameObjectConfig = {
    game: Game;
    position: GameObjectPosition;
    sprite: GameObjectSprite;
    scale: number;
    width: number;
    height: number;
    visibility: boolean;
};
//# sourceMappingURL=index.d.ts.map