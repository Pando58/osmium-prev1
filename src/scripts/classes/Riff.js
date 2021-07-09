export default class Riff {
  constructor(fn) {
    this.fn = fn;
  }

  play(sub, beat, bar) {
    return this.fn(sub, beat, bar);
  }
}