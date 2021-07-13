import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 155,
  base: 4,
  subdivision: 4
}, {
  loop: true,
  end: 16
});

const track = project.addTrack({
  1: 'clavinet',
  2: 'clavinet',
  3: 'clavinet',
  4: 'clavinet',
  5: 'clavinet',
  6: 'clavinet'
});

track.addSection(0, 8, new Riff((sub, beat, bar) => {
  const p = '0102  0 0 0102  0 0 010';
  
  if (p[sub % p.length] === '0') { return { 6: 46 } }
  if (p[sub % p.length] === '1') { return { 6: 47 } }
  if (p[sub % p.length] === '2') { return { 6: 48 } }
}));

track.addSection(8, 12, new Riff((sub, beat, bar) => {
  const p = '0102  0  0  0102  0 0   ';
  
  if (p[sub % p.length] === '0') { return { 6: 46 } }
  if (p[sub % p.length] === '1') { return { 6: 47 } }
  if (p[sub % p.length] === '2') { return { 6: 48 } }
}));

track.addSection(12, 16, new Riff((sub, beat, bar) => {
  const p = '0102  0  0  0102  0 0   ';
  
  if (p[sub % p.length] === '0') { return { 6: 46 } }
  if (p[sub % p.length] === '1') { return { 6: 47 } }
  if (p[sub % p.length] === '2') { return { 6: 48 } }
}));



document.getElementById('play').onclick = () => {
  project.timeTracker.togglePlay();
}





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
    
    Player (voices)
      - voices
      
      play(voice, note)
      stop(voice?)

  TimeTracker (project)
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




/*

Project
  - bpm
  - base
  - subdivision
  
  Tracks
    Instrument
    Sections
      Riffs
  Player

*/