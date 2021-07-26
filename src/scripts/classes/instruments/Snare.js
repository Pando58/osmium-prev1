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