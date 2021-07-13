import Section from './Section'
import Player from './Player'

export default class Track {
  constructor(project, ac, voices) {
    this.project = project;

    this.sections = [];
    this.player = new Player(ac, voices);
    
    this.endTime = 0;
  }

  addSection({ start, end, subdivision, riff } = {}) {
    const section = new Section(start, end, subdivision, riff);
    this.sections.push(section);

    this.sortSections();

    return section;
  }

  sortSections() {}


  tick(time) {
    this.sections.filter(i => i.start <= time && i.end > time).forEach(i => {
      const notes = i.getNotes(time);

      if (notes) {
        Object.keys(notes).forEach(i => {
          this.player.stop();
          this.player.play(i, notes[i]);
        });
      }
    });
  }
  
  
  
  

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

    this.sections.forEach(i => i.step = -1);
  }
}