export class ImageManager {
    library;
    constructor() {
        this.library = {};
    }
    async register(metadata) {
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
        }
        catch (error) {
            console.log("Image Loading Error: ", error);
        }
    }
    loadAssets(assets) {
        const assetPromises = assets.map((asset) => this.register(asset));
        return Promise.all(assetPromises);
    }
    getAsset(srcName) {
        return this.library[srcName];
    }
}
//# sourceMappingURL=ImageManager.js.map