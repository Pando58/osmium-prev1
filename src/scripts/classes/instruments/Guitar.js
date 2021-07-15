import Instrument from '../Instrument'

export default class Guitar extends Instrument {
  constructor(ac) {
    super(ac, {
      '1': 'acoustic_guitar_steel',
      '2': 'acoustic_guitar_steel',
      '3': 'acoustic_guitar_steel',
      '4': 'acoustic_guitar_steel',
      '5': 'acoustic_guitar_steel',
      '6': 'acoustic_guitar_steel',
    })
  }

  play(strings = []) {
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i].string + '';
      const fret = strings[i].fret + '';
      
      const stringOffsets = {
        '6': 40,
        '5': 40+5,
        '4': 40+5+5,
        '3': 40+5+5+5,
        '2': 40+5+5+5+4,
        '1': 40+5+5+5+4+5
      }
      
      this.player.play(string, +stringOffsets[string] + +fret);
    }
  }
}