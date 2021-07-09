import Section from './Section'
import Instrument from './Instrument'

export default class Track {
  constructor(project) {
    this.project = project;

    this.sections = [];
    this.instrument = new Instrument({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    });
    
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
    this.sections.forEach(i => i.play(sub, beat, bar));
  }
}