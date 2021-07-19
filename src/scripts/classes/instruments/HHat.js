import * as Tone from 'tone'
import hhat_open_01 from '../../../sounds/drum_kit/hhat/hhat_open_09.wav'

export default class HHat {
  constructor() {
    this.sampler = new Tone.Sampler({
      C3: hhat_open_01
    }).toDestination();

    this.sampler.set({
      volume: -8
    });
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}