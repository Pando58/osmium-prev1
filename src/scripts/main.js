import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 155,
  base: 4
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
});

track.addSection({
  start: 12 * 4,
  end: 16 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '0102  0  0  0102  0 0   ';
    
    if (p[step % p.length] === '0') { return { 6: 46 } }
    if (p[step % p.length] === '1') { return { 6: 47 } }
    if (p[step % p.length] === '2') { return { 6: 48 } }
  })
});


document.getElementById('play').onclick = () => {
  project.togglePlay();
}
