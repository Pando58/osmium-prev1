import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 149,
  base: 4
}, {
  loop: false,
  end: 17
});

const track = project.addTrack('guitar');


track.addSection({
  start: 0,
  end: 8 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '606 0606 0606 060606 0606 0606  ';

    if (p[step % p.length] === '6') return [{ string: '5', fret: '7' }];
    if (p[step % p.length] === '0') return [{ string: '5', fret: '1' }];
  })
});

track.addSection({
  start: 8 * 4,
  end: 9 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '201 0201 0201   ';

    if (p[step % p.length] === '0') return [{ string: '5', fret: '1' }];
    if (p[step % p.length] === '1') return [{ string: '5', fret: '2' }];
    if (p[step % p.length] === '2') return [{ string: '5', fret: '3' }];
  })
});

track.addSection({
  start: 9 * 4,
  end: 17 * 4,
  subdivision: 4,
  riff: new Riff(step => {
    const p = '000 0';

    if (p[step % p.length] === '0') return [{ string: '6', fret: '4' }, { string: '5', fret: '4' }, ];
  })
});



document.getElementById('play').onclick = () => {
  project.togglePlay();
  // project.timeTracker.position = 132000;
}
