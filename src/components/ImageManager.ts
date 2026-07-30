import type { AssetLibraryValue, AssetMetadata } from "../types";

export class ImageManager {
  public library: Record<string, AssetLibraryValue<HTMLImageElement>>;
  constructor() {
    this.library = {};
  }

  async register(metadata: AssetMetadata) {
    try {
      const { name, src } = metadata;

      const img = new Image();
      img.src = src;

      await img.decode();

      this.library[name] = {
        name,
        element: img,
        isLoaded: true,
      };

      return img;
    } catch (error) {
      console.log("Image Loading Error: ", error);
    }
  }

  loadAssets(assets: AssetMetadata[]) {
    const assetPromises = assets.map((asset) => this.register(asset));
    return Promise.all(assetPromises);
  }

  getAsset(srcName: string) {
    return this.library[srcName];
  }
}
