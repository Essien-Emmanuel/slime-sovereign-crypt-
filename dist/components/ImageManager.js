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
            console.log(this.library);
            return img;
        }
        catch (error) {
            console.log("Image Loading Error: ", error);
        }
    }
    loadAssets(assets) {
        assets.map(async (asset) => await this.register(asset));
    }
}
//# sourceMappingURL=ImageManager.js.map