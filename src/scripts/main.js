import * as Tone from 'tone'
import '../styles/main.scss'

import Project from './classes/Project'
import Riff from './classes/Riff'

const project = new Project({
  bpm: 149,
  base: 4
}, {
  loop: true
});

const trackKick = project.addTrack('kick');
const trackSnare = project.addTrack('snare');
const trackChina = project.addTrack('china');
const trackCrash = project.addTrack('crash');
const trackHHat = project.addTrack('hhat');


trackKick.addSection({ start: 0, end: 8 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '000 0000 0000 000000 0000 0000  ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackSnare.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '  0 ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackCrash.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0       ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackChina.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0000';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});



trackKick.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '--0 0--0 0--0   ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackSnare.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '0-- -0-- -0--   ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackCrash.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0   ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});



trackKick.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = ' 00 0';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackSnare.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '0    ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackHHat.addSection({ start: 9.25 * 4, end: 17 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0000';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

trackCrash.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0               ';

    if (p[step % p.length] === '0') return [{ play: true }];
  })
});

/* track.addSection({
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
}); */



document.getElementById('play').onclick = async () => {
  await Tone.start();
  project.togglePlay();
  // project.timeTracker.position = 132000;
}
