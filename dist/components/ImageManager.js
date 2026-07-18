export class ImageManager {
    library;
    constructor() {
        this.library = {};
    }
    async register(metadata) {
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
    load(_name) { }
}
//# sourceMappingURL=ImageManager.js.map