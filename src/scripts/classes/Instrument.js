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

  volumeToDecibels(db) {
    const x1 = 0;
    const y1 = 1;
    const x2 = -60;
    const y2 = 0;
    
    return (db - x1) * (y2 - x2) / (y1 - x1) + x2;
  }
}