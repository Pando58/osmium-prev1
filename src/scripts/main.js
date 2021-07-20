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
const trackGuitar = project.addTrack('guitar');


trackKick.addSection({ start: 0, end: 8 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '000 0000 0000 000000 0000 0000  ';

    if (p[step % p.length] === '0') return true;
  })
});

trackGuitar.addSection({ start: 0, end: 8 * 4, subdivision: 4,
  riff: new Riff(step => {
    let send = {};

    const p = '606 0606 0606 060606 0606 0606- ';

    if (p[step % p.length] === '-') send.action = 'mute';

    if (p[step % p.length] === '0') send.notes = [{ string: '7', fret: 0 }];
    if (p[step % p.length] === '6') send.notes = [{ string: '7', fret: 6 }];

    return send;
  })
});

trackSnare.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '  0 ';

    if (p[step % p.length] === '0') return true;
  })
});

trackCrash.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0       ';

    if (p[step % p.length] === '0') return true;
  })
});

trackChina.addSection({ start: 0, end: 8 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0000';

    if (p[step % p.length] === '0') return true;
  })
});



trackKick.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '--0 0--0 0--0   ';

    if (p[step % p.length] === '0') return true;
  })
});

trackSnare.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '0-- -0-- -0--   ';

    if (p[step % p.length] === '0') return true;
  })
});

trackGuitar.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 4,
  riff: new Riff(step => {
    let send = {};
    
    const p = '201 0201 0201 - ';

    if (p[step % p.length] === '-') send.action = 'mute';

    if (p[step % p.length] === '0') send.notes = [{ string: '7', fret: '0' }];
    if (p[step % p.length] === '1') send.notes = [{ string: '7', fret: '1' }];
    if (p[step % p.length] === '2') send.notes = [{ string: '7', fret: '2' }];

    return send;
  })
});

trackCrash.addSection({ start: 8 * 4, end: 9 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0   ';

    if (p[step % p.length] === '0') return true;
  })
});



trackKick.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = ' 00 0';

    if (p[step % p.length] === '0') return true;
  })
});

trackSnare.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 4,
  riff: new Riff(step => {
    const p = '0    ';

    if (p[step % p.length] === '0') return true;
  })
});

trackGuitar.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 4,
  riff: new Riff(step => {
    let send = {};
    
    const p = '222 2';
    
    if (p[step % p.length] === '2') send.notes = [{ string: '7', fret: '3' }, { string: '6', fret: '5' }, ];

    return send;
  })
});

trackHHat.addSection({ start: 9.25 * 4, end: 17 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0000';

    if (p[step % p.length] === '0') return true;
  })
});

trackCrash.addSection({ start: 9 * 4, end: 17 * 4, subdivision: 1,
  riff: new Riff(step => {
    const p = '0               ';

    if (p[step % p.length] === '0') return true;
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
  
  Tone.loaded().then(() => {
    project.togglePlay();
  });
}
