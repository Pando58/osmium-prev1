import { Sampler } from 'tone'

export default class Instrument {
  constructor(voices) {
    this.voices = {};

    for (let key in voices) {
      this.voices[key] = new Sampler(voices[key]).toDestination();
    }
  }

  triggerSound() {}
  
  play() {}

  stop() {}
}