import Section from './Section'
import Player from './Player'

export default class Track {
  constructor(project, ac, voices) {
    this.project = project;

    this.sections = [];
    this.player = new Player(ac, voices);
    
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
          this.player.stop();
          this.player.play(i, notes[i]);
        });
      }
    }
  }

  stop() {
    this.player.stop();
  }
}