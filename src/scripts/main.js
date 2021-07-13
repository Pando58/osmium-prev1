import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 180,
  base: 4
}, {
  loop: true,
  end: 9.75
});

const track = project.addTrack({
  1: 'clavinet',
  2: 'clavinet',
  3: 'clavinet',
  4: 'clavinet',
  5: 'clavinet',
  6: 'clavinet'
});


track.addSection({
  start: 0,
  end: 8,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '  000   ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});

track.addSection({
  start: 8,
  end: 12,
  subdivision: 3,
  riff: new Riff(step => {
    const p = '0000000     ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});

track.addSection({
  start: 12,
  end: 16,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '000000000       ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});

track.addSection({
  start: 16,
  end: 24,
  subdivision: 3,
  riff: new Riff(step => {
    const p = ' 000000000000000000     ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});

track.addSection({
  start: 24,
  end: 32,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '000         000   000           ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});

track.addSection({
  start: 32,
  end: 39,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '00000000000000000 000 0   0 ';

    if (p[step % p.length] === '0') return { 6: 38 };
  })
});


/* 
track.addSection({
  start: 0,
  end: 8 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '0102  0 0 0102  0 0 010';
    
    if (p[step % p.length] === '0') { return { 6: 46 } }
    if (p[step % p.length] === '1') { return { 6: 47 } }
    if (p[step % p.length] === '2') { return { 6: 48 } }
  })
});

track.addSection({
  start: 8 * 4,
  end: 12 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '0102  0  0  0102  0 0   ';
    
    if (p[step % p.length] === '0') { return { 6: 46 } }
    if (p[step % p.length] === '1') { return { 6: 47 } }
    if (p[step % p.length] === '2') { return { 6: 48 } }
  })
});

track.addSection({
  start: 8 * 4,
  end: 12 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '0102  0  0  0102  0 0   ';
    
    if (p[step % p.length] === '0') { return { 6: 46 } }
    if (p[step % p.length] === '1') { return { 6: 47 } }
    if (p[step % p.length] === '2') { return { 6: 48 } }
  })
}); */


document.getElementById('play').onclick = () => {
  project.timeTracker.togglePlay();
}





/*

Project (bpm, base, subdivision, config)
  - bpm
  - base
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
      - subdivision
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
      beat()
      bar()
      play()
      stop()
      togglePlay()

*/