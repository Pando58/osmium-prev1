import Instrument from '../Instrument'

import china_01 from '../../../sounds/drum_kit/china/china_01.wav'

export default class China extends Instrument {
  constructor() {
    super({
      '1': {
        C3: china_01
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