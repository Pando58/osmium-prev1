import { Sampler } from 'tone'
import china_01 from '../../../sounds/drum_kit/china/china_01.wav'

export default class China {
  constructor() {
    this.sampler = new Sampler({
      C3: china_01
    }).toDestination();

    this.sampler.set({
      volume: -13
    });
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}