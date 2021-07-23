import { Channel } from 'tone'
import Section from './Section'

import Kick from './instruments/Kick'
import Snare from './instruments/Snare'
import HHat from './instruments/HHat'
import Crash from './instruments/Crash'
import China from './instruments/China'
import MidTom from './instruments/MidTom'
import Guitar from './instruments/Guitar'

export default class Track {
  constructor(project, {instrument, volume, pan, mute} = {}) {
    this.project = project;
    this.ac = project.ac;

    this.volume = volume;
    this.pan = pan;
    this.mute = mute;
    
    this.channel = new Channel(volume, pan).toDestination();

    this.sections = [];
    this.instrument = this.getInstrument(instrument);
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
      const inst = new map[instrument]();
      inst.connect(this.channel);

      return inst;
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
    if (this.mute) return;
    
    this.sections.filter(i => i.start <= time && i.end > time).forEach(i => {
      const notes = i.getNotes(time);

      if (notes) {
        this.instrument.triggerSound(notes);
      }
    });
  }

  play() {
    this.instrument.play();
  }

  stop() {
    this.instrument.stop();

    this.sections.forEach(i => i.step = -1);
  }
}