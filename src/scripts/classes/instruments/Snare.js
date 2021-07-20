import Instrument from '../Instrument'

import snare_01 from '../../../sounds/drum_kit/snare/snare_01.wav'

export default class Snare extends Instrument {
  constructor() {
    super({
      '1': {
        C3: snare_01
      }
    });
  }

  triggerSound() {
    this.voices['1'].triggerAttackRelease('C3');
  }
}