import Instrument from '../Instrument'

import crash_01 from '../../../sounds/drum_kit/crash/crash_01.wav'

export default class Crash extends Instrument {
  constructor() {
    super({
      '1': {
        C3: crash_01
      }
    });

    this.voices['1'].set({
      volume: -10
    });
  }

  triggerSound() {
    this.voices['1'].triggerAttack('C3');
  }
}