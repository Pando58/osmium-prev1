import Instrument from '../Instrument'

import midTom_01 from '../../../sounds/drum_kit/mid_tom/midTom_01.wav'

export default class MidTom extends Instrument {
  constructor() {
    super({
      '1': {
        C3: midTom_01
      }
    });
  }

  triggerSound() {
    this.voices['1'].triggerAttack('C3');
  }
}