import { Sampler } from 'tone'
import kick_01 from '../../../sounds/drum_kit/kick/kick_01.wav'

export default class Kick {
  constructor() {
    this.sampler = new Sampler({
      C3: kick_01
    }).toDestination();
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}