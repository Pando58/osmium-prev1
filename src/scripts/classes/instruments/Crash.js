import Instrument from '../Instrument'

import crash_01 from '../../../sounds/drum_kit/crash/crash_01.wav'

export default class Crash extends Instrument {
  constructor() {
    super({
      '1': {
        C3: crash_01
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