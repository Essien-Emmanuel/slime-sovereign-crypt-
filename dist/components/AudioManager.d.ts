import type { AssetLibraryValue, AssetMetadata } from "../types/index.js";
export declare class AudioManager {
    library: Map<string, AssetLibraryValue<HTMLAudioElement>>;
    constructor();
    register(metadata: AssetMetadata): this;
}
//# sourceMappingURL=AudioManager.d.ts.map