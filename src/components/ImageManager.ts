import type { AssetLibraryValue, AssetMetadata } from "../types";

export class ImageManager {
  public library: Record<string, AssetLibraryValue<HTMLImageElement>>;
  constructor() {
    this.library = {};
  }

  async register(metadata: AssetMetadata) {
    const { name, src } = metadata;

    const img = new Image();
    img.src = src;

    await img.decode();

    this.library[name] = {
      name,
      element: img,
      isLoaded: true,
    };

    console.log("last");

    return img;
  }

  load(_name: string) {}
}
