import Section from './Section'
import Guitar from './instruments/Guitar'

export default class Track {
  constructor(ac, instrument) {
    this.ac = ac;

    this.sections = [];
    this.instrument = this.getInstrument(instrument);
    
    this.endTime = 0;
  }

  getInstrument(instrument) {
    return new Guitar(this.ac);
  }

  addSection({ start, end, subdivision, riff } = {}) {
    const section = new Section(start, end, subdivision, riff);
    this.sections.push(section);

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