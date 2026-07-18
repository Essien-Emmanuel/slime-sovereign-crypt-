export type AssetLibraryValue<T extends HTMLImageElement | HTMLAudioElement> = {
  element: T;
  isLoaded: boolean;
  name: string;
};

export type AssetMetadata = { name: string; src: string };
