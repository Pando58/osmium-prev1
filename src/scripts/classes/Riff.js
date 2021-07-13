export default class Riff {
  constructor(fn) {
    this.fn = fn;
  }

  play(step) {
    return this.fn(step) || {};
  }
}