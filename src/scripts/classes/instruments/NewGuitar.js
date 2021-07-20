import { Sampler, now } from 'tone'

import Eb2 from '../../../sounds/guitar/Eb2.wav'
import Gb2 from '../../../sounds/guitar/Gb2.wav'
import A2  from '../../../sounds/guitar/A2.wav'
import C3  from '../../../sounds/guitar/C3.wav'
import Eb3 from '../../../sounds/guitar/Eb3.wav'
import Gb3 from '../../../sounds/guitar/Gb3.wav'
import A3  from '../../../sounds/guitar/A3.wav'
import C4  from '../../../sounds/guitar/C4.wav'
import Eb4 from '../../../sounds/guitar/Eb4.wav'
import Gb4 from '../../../sounds/guitar/Gb4.wav'
import A4  from '../../../sounds/guitar/A4.wav'

export default class Guitar {
  constructor() {
    const notes = {
      Eb2: Eb2,
      Gb2: Gb2,
      A2: A2,
      C3: C3,
      Eb3: Eb3,
      Gb3: Gb3,
      A3: A3,
      C4: C4,
      Eb4: Eb4,
      Gb4: Gb4,
      A4: A4,
    }

    this.voices = {
      '1': new Sampler(notes).toDestination(),
      '2': new Sampler(notes).toDestination(),
      '3': new Sampler(notes).toDestination(),
      '4': new Sampler(notes).toDestination(),
      '5': new Sampler(notes).toDestination(),
      '6': new Sampler(notes).toDestination(),
      '7': new Sampler(notes).toDestination()
    };

    // this.sampler.set({
    //   volume: -13
    // });
  }

  play(strings = []) {
    for (let key in this.voices) {
      this.voices[key].releaseAll();
    }
    
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i].string + '';
      const fret = strings[i].fret + '';
      
      const stringOffsets = {
        '7': 40-1-5,
        '6': 40-1,
        '5': 40-1+5,
        '4': 40-1+5+5,
        '3': 40-1+5+5+5,
        '2': 40-1+5+5+5+4,
        '1': 40-1+5+5+5+4+5
      }
      
      if (this.voices.hasOwnProperty(string)) {
        this.voices[string].triggerAttack(8 * Math.pow(2, (+stringOffsets[string] + +fret) / 12));
      }
      
      
      
      // this.player.play(string, +stringOffsets[string] + +fret);
    }
  }

  stop() {}
}