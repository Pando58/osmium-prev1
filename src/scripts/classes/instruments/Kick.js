import Instrument from '../Instrument'

import kick_01 from '../../../sounds/drum_kit/kick/kick_01.wav'

export default class Kick extends Instrument {
  constructor() {
    super({
      '1': {
        C3: kick_01
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