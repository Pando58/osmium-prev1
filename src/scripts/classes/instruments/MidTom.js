import { Sampler } from 'tone'
import midTom_01 from '../../../sounds/drum_kit/mid_tom/midTom_01.wav'

export default class MidTom {
  constructor() {
    this.sampler = new Sampler({
      C3: midTom_01
    }).toDestination();
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}