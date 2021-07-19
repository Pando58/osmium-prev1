import { Sampler } from 'tone'
import snare_01 from '../../../sounds/drum_kit/snare/snare_01.wav'

export default class Snare {
  constructor() {
    this.sampler = new Sampler({
      C3: snare_01
    }).toDestination();
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}