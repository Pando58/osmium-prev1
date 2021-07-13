export default class Section {
  constructor(start, duration, riff) {
    this.start = start;
    this.duration = duration;
    this.riff = riff;
  }

  getNotes(sub, beat, bar) {
    return this.riff.play(sub, beat, bar);
  }
}