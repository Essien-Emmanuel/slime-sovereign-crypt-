import { KEYS } from "./Utils";

export class Input {
  public keys: string[];

  constructor() {
    this.keys = [];
    this.registerkeys();
  }

  private registerkeys() {
    document.addEventListener("keydown", (e) => {
      if ([KEYS.UP, "w"].includes(e.key)) {
        this.keypress(e.key);
      }
      if ([KEYS.DOWN, "s"].includes(e.key)) {
        this.keypress(e.key);
      }
      if ([KEYS.LEFT, "a"].includes(e.key)) {
        this.keypress(e.key);
      }
      if ([KEYS.RIGHT, "d"].includes(e.key)) {
        this.keypress(e.key);
      }
    });

    document.addEventListener("keyup", (e) => {
      if ([KEYS.UP, "w"].includes(e.key)) {
        this.keyrelease(e.key);
      }
      if ([KEYS.DOWN, "s"].includes(e.key)) {
        this.keyrelease(e.key);
      }
      if ([KEYS.LEFT, "a"].includes(e.key)) {
        this.keyrelease(e.key);
      }
      if ([KEYS.RIGHT, "d"].includes(e.key)) {
        this.keyrelease(e.key);
      }
    });
  }

  keypress(key: string) {
    if (this.keys.indexOf(key) === -1) {
      this.keys.unshift(key);
    }
    // console.log(this.keys);
  }

  keyrelease(key: string) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
    }
  }

  get getLastkey() {
    return this.keys[0];
  }
}
