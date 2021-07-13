import Section from './Section'
import Instrument from './Instrument'

export default class Track {
  constructor(project, ac, voices) {
    this.project = project;

    this.sections = [];
    this.instrument = new Instrument(ac, voices);
    
    this.endTime = 0;
  }

  addSection(start, duration, riff) {
    const section = new Section(start, duration, riff);
    this.sections.push(section);

    this.sortSections();

    return section;
  }

  sortSections() {}

  play(sub, beat, bar) {
    const sec = this.sections.find(i => i.start <= bar && i.duration > bar);

    if (sec) {
      const notes = sec.getNotes(sub - (sec.start * this.project.base * this.project.subdivision), beat, bar - sec.start);

      if (notes) {
        Object.keys(notes).forEach(i => {
          this.instrument.stop();
          this.instrument.play(i, notes[i]);
        });
      }
    }
  }

  stop() {
    this.instrument.stop();
  }
}