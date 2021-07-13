import * as Tone from 'tone'

export default class Instrument {
  constructor(voices) {
    this.voices = {};
    for (let key in voices) {
      this.voices[key] = new Tone.Synth().toDestination();
    }
  }

  play(voice, note) {
    this.voices[voice].triggerAttack(Math.pow(2, ((note + 0.33)/12) + 3));
  }

  stop(voice) {
    if (voice !== undefined) {} else {}
  }
}