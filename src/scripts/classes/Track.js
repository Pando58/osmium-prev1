import Section from './Section'

import Kick from './instruments/Kick'
import Snare from './instruments/Snare'
import HHat from './instruments/HHat'
import Crash from './instruments/Crash'
import China from './instruments/China'
import MidTom from './instruments/MidTom'
import Guitar from './instruments/NewGuitar'

export default class Track {
  constructor(project, instrument) {
    this.project = project;
    this.ac = project.ac;

    this.sections = [];
    this.instrument = this.getInstrument(instrument);
    
    this.endTime = 0;
  }

  getInstrument(instrument) {
    const map = {
      'kick': Kick,
      'snare': Snare,
      'hhat': HHat,
      'crash': Crash,
      'china': China,
      'midTom': MidTom,
      'guitar': Guitar
    };

    if (map.hasOwnProperty(instrument)) {
      return new map[instrument]();
    }

    return new Kick();
  }

  addSection({ start, end, subdivision, riff } = {}) {
    const section = new Section(start, end, subdivision, riff);
    this.sections.push(section);

    this.project.calculateEndPosition();
    
    return section;
  }


  tick(time) {
    this.sections.filter(i => i.start <= time && i.end > time).forEach(i => {
      const notes = i.getNotes(time);

      if (notes) {
        this.instrument.stop();
        this.instrument.play(notes);
      }
    });
  }

  stop() {
    this.instrument.stop();

    this.sections.forEach(i => i.step = -1);
  }
}