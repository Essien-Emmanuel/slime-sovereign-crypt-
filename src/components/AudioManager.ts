import type { AssetLibraryValue, AssetMetadata } from "../types";

export class AudioManager {
  public library: Map<string, AssetLibraryValue<HTMLAudioElement>>;
  constructor() {
    this.library = new Map();
  }

  register(metadata: AssetMetadata) {
    const { name, src } = metadata;

    this.library.set(name, {
      name,
      element: new Audio(src),
      isLoaded: false,
    });

    return this;
  }
}
