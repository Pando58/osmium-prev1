import { Sampler } from 'tone'

export default class Instrument {
  constructor(voices) {
    this.voices = {};

    for (let key in voices) {
      this.voices[key] = new Sampler(voices[key]);
    }
  }

  connect(channel) {
    for (let key in this.voices) {
      this.voices[key].connect(channel);
    }
  }

  triggerSound() {}
  
  play() {}

  stop() {}
}