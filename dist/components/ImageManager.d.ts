import type { AssetLibraryValue, AssetMetadata } from "../types/index.js";
export declare class ImageManager {
    library: Record<string, AssetLibraryValue<HTMLImageElement>>;
    constructor();
    register(metadata: AssetMetadata): Promise<HTMLImageElement>;
    load(_name: string): void;
}
//# sourceMappingURL=ImageManager.d.ts.map