import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 155,
  base: 4,
  subdivision: 4
}, {
  loop: true,
  end: 4
});

const track = project.addTrack();

const section = track.addSection(0, 4, new Riff((sub, beat, bar) => {
  const p = '000 0 0 000 0 0 000 0 0 0 0 000 0 0 000 0 0 000 ';
  
  return p[sub % p.length] === '0' ? {6: 46} : null;
}));

document.getElementById('play').onclick = () => {
  project.player.togglePlay();
}

console.log(project);
console.log(track);
console.log(section);




/*

Project (bpm, base, subdivision, config)
  - bpm
  - base
  - subdivision
  - config {
    loop?
  }

  addTrack()
  play(sub, beat, bar) -> tracks

  Tracks (project)
    - endTime
    addSection(start, duration, riff) > sortSections()
    sortSections() > calculate endTime, calculate project endTime with longest track
    play(sub, beat, bar) -> sections

    Sections (start, duration, riff)
      - start
      - duration
      play(sub, beat, bar) -> Riff

      Riff (fn)
        - fn
        play(subbeat, beat, bar) -> Get corresponding notes
    
    Instrument (voices)
      - voices
      
      play(voice, note)
      stop(voice?)

  Player (project)
    - playing
    - position
    - musicalPosition { bar, beat, subbeat }

      loop(delta)
      deltaTime(ts, last_ts)
      subbeat()
      beat()
      bar()
      play()
      stop()
      togglePlay()

*/
