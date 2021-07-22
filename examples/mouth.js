export default {
  bpm: 149,
  base: 4,
  config: {
    loop: true
  },
  tracks: [
    {
      instrument: 'kick',
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 4,
          riff: step => {
            const p = '000 0000 0000 000000 0000 0000  ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 8 * 4,
          end: 9 * 4,
          subdivision: 4,
          riff: step => {
            const p = '--0 0--0 0--0   ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 9 * 4,
          end: 17 * 4,
          subdivision: 4,
          riff: step => {
            const p = ' 00 0';
        
            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    },
    {
      instrument: 'snare',
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 1,
          riff: step => {
            const p = '  0 ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 8 * 4,
          end: 9 * 4,
          subdivision: 4,
          riff: step => {
            const p = '0-- -0-- -0--   ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 9 * 4,
          end: 17 * 4,
          subdivision: 4,
          riff: step => {
            const p = '0    ';
        
            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    },
    {
      instrument: 'china',
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 1,
          riff: step => {
            const p = '0000';
        
            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    },
    {
      instrument: 'hhat',
      sections: [
        {
          start: 9.25 * 4,
          end: 17 * 4,
          subdivision: 1,
          riff: step => {
            const p = '0000';
        
            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    },
    {
      instrument: 'crash',
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 1,
          riff: step => {
            const p = '0       ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        { start: 8 * 4, end: 9 * 4, subdivision: 1,
          riff: step => {
            const p = '0   ';
        
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 9 * 4,
          end: 17 * 4,
          subdivision: 1,
          riff: step => {
            const p = '0               ';
        
            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    },
    {
      instrument: 'guitar',
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 4,
          riff: step => {
            let send = {};
        
            const p = '606 0606 0606 060606 0606 0606- ';
        
            if (p[step % p.length] === '-') send.action = 'mute';
        
            if (p[step % p.length] === '0') send.notes = [{ string: '7', fret: 0 }];
            if (p[step % p.length] === '6') send.notes = [{ string: '7', fret: 6 }];
        
            return send;
          }
        },
        {
          start: 8 * 4,
          end: 9 * 4,
          subdivision: 4,
          riff: step => {
            let send = {};
            
            const p = '201 0201 0201 - ';
        
            if (p[step % p.length] === '-') send.action = 'mute';
        
            if (p[step % p.length] === '0') send.notes = [{ string: '7', fret: '0' }];
            if (p[step % p.length] === '1') send.notes = [{ string: '7', fret: '1' }];
            if (p[step % p.length] === '2') send.notes = [{ string: '7', fret: '2' }];
        
            return send;
          }
        },
        {
          start: 9 * 4,
          end: 17 * 4,
          subdivision: 4,
          riff: step => {
            let send = {};
            
            const p = '222 2';
            
            if (p[step % p.length] === '2') send.notes = [{ string: '7', fret: '3' }, { string: '6', fret: '5' }, ];
        
            return send;
          }
        }
      ]
    }
  ]
}