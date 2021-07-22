import Project from './Project'

export default class ProjectLoader {
  constructor() {}

  static openProject(file) {
    const project = new Project({
      bpm: file.bpm,
      base: file.base
    }, {
      loop: file.config.loop
    });

    file.tracks.forEach(i => {
      const track = project.addTrack(i.instrument);

      i.sections.forEach(j => {
        const section = track.addSection({
          start: j.start,
          end: j.end,
          subdivision: j.subdivision,
          riff: j.riff
        });
      });
    });

    return project;


    
    
    
    
    // if (!file.hasOwnProperty('bpm')) throw false;
    // if (!file.hasOwnProperty('base')) throw false;
    // if (!file.hasOwnProperty('tracks')) throw false;
    // if (!file.hasOwnProperty('config')) file.config = {};

    // const { bpm, base, config, tracks } = file;
    
    // if (!config.hasOwnProperty('loop')) config.loop = false;

    // if (typeof bpm !== 'number') throw false;
    // if (typeof base !== 'number') throw false;
    // if (typeof tracks !== 'object') throw false;
    // if (typeof config.loop !== 'boolean') throw false;

    // if (bpm <= 0) throw false;
    // if (base <= 0) throw false;
  }
}