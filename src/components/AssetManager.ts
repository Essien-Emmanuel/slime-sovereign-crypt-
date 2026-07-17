export type AssetType = "audio" | "image" | "video";

export type AssetLibraryValue = {
  type: AssetType;
  src: string;
  isLoaded: boolean;
  name: string;
};

export class AssetManager {
  public library: Map<string, AssetLibraryValue>;
  constructor() {
    this.library = new Map();
  }

  register(asset: Omit<AssetLibraryValue, "isLoaded">) {
    const { name, src, type } = asset;
    this.library.set(name, { name, src, type, isLoaded: false });

    return this;
  }
}
