export class AudioManager {
    library;
    constructor() {
        this.library = new Map();
    }
    register(metadata) {
        const { name, src } = metadata;
        this.library.set(name, {
            name,
            element: new Audio(src),
            isLoaded: false,
        });
        return this;
    }
}
//# sourceMappingURL=AudioManager.js.map