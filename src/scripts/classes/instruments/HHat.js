import Instrument from '../Instrument'

import hhat_open_01 from '../../../sounds/drum_kit/hhat/hhat_open_09.wav'

export default class HHat extends Instrument {
  constructor() {
    super({
      '1': {
        C3: hhat_open_01
      }
    });

    this.voices['1'].set({
      volume: -11
    });
  }

  triggerSound() {
    this.voices['1'].triggerAttack('C3');
  }
}