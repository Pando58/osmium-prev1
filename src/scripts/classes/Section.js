export default class Section {
  constructor(start, duration, riff) {
    this.start = start;
    this.duration = duration;
    this.riff = riff;
  }

  play(sub, beat, bar) {
    this.riff.play(sub, beat, bar);
  }
}