import { Sampler } from 'tone'
import crash_01 from '../../../sounds/drum_kit/crash/crash_01.wav'

export default class Crash {
  constructor() {
    this.sampler = new Sampler({
      C3: crash_01
    }).toDestination();

    this.sampler.set({
      volume: -10
    });
  }

  play() {
    this.sampler.triggerAttackRelease(['C3'], 5);
  }

  stop() {}
}