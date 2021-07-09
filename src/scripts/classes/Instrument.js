export default class Instrument {
  constructor(voices) {
    this.voices = voices;
  }

  play(voice, note) {}
  stop(voice) {
    if (voice !== undefined) {} else {}
  }
}