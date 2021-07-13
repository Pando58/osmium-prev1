import '../styles/main.scss'
import * as Tone from 'tone'

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
  1: 'a',
  2: 'a',
  3: 'a',
  4: 'a',
  5: 'a',
  6: 'a'
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
  project.player.togglePlay();
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
