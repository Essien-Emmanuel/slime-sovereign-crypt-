export class GameAudio {
  public audio: HTMLAudioElement;
  constructor(src: string) {
    this.audio = new Audio(src);
  }
}
