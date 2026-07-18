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
      console.log(this.library);

      return img;
    } catch (error) {
      console.log("Image Loading Error: ", error);
    }
  }

  loadAssets(assets: AssetMetadata[]) {
    assets.map(async (asset) => await this.register(asset));
  }
}
