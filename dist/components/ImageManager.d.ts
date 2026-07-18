import type { AssetLibraryValue, AssetMetadata } from "../types/index.js";
export declare class ImageManager {
    library: Record<string, AssetLibraryValue<HTMLImageElement>>;
    constructor();
    register(metadata: AssetMetadata): Promise<HTMLImageElement | undefined>;
    loadAssets(assets: AssetMetadata[]): void;
}
//# sourceMappingURL=ImageManager.d.ts.map