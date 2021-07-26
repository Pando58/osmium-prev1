import Instrument from '../Instrument'

import hhat_open_01 from '../../../sounds/drum_kit/hhat/hhat_open_09.wav'

export default class HHat extends Instrument {
  constructor() {
    super({
      '1': {
        C3: hhat_open_01
      }
    });
  }

  triggerSound(notes, controls) {
    if (notes[0].note) {
      if (notes[0].hasOwnProperty('volume')) {
        this.voices['1'].set({
          volume: this.volumeToDecibels(notes[0].volume)
        });
      }
      
      this.voices['1'].triggerAttack('C3');
    }
  }
}