export class Game {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;

    this.canvas.width = 300;
    this.canvas.height = 200;
  }

  handleInput() {}

  update() {}

  render() {
    console.log("here");
    console.log(this.ctx);
    this.ctx.fillRect(10, 10, 20, 20);
  }
}
