import Instrument from '../Instrument'

import china_01 from '../../../sounds/drum_kit/china/china_01.wav'

export default class China extends Instrument {
  constructor() {
    super({
      '1': {
        C3: china_01
      }
    });

    this.voices['1'].set({
      volume: -13
    });
  }

  triggerSound() {
    this.voices['1'].triggerAttack('C3');
  }
}