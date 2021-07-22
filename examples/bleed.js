export default {
  bpm: 115,
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
          subdivision: 8,
          riff: step => {
            const p = '000 0 ';

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
          end: 7 * 4,
          subdivision: 1,
          riff: step => {
            const p = '  0 ';

            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 7 * 4,
          end: 8 * 4,
          subdivision: 4,
          riff: step => {
            const p = '        0  0  0 ';

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
          end: 7.5 * 4,
          subdivision: 1,
          riff: step => {
            return true;
          }
        }
      ]
    },
    {
      instrument: 'crash',
      sections: [
        {
          start: 0,
          end: 4,
          subdivision: 1,
          riff: step => {
            const p = '0   '
            
            if (p[step % p.length] === '0') return true;
          }
        },
        {
          start: 7 * 4,
          end: 8 * 4,
          subdivision: 4,
          riff: step => {
            const p = '        0  0  0 ';

            if (p[step % p.length] === '0') return true;
          }
        }
      ]
    }
  ]
}