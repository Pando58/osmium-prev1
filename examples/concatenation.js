export default {
  bpm: 146,
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
          end: 4 * 4,
          subdivision: 4,
          riff: step => {
            const p = '0  0 0 0  ';

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
          end: 4 * 4,
          subdivision: 4,
          riff: step => {
            const p = '    0     ';

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
          end: 4 * 4,
          subdivision: 4,
          riff: step => {
            const p = '0 00 0 0 0';

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
          end: 2,
          subdivision: 1,
          riff: step => {
            const p = '0 ';

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
          end: 4 * 4,
          subdivision: 4,
          riff: step => {
            const p = '060060 0 0';

            if (p[step % p.length] === '0') return { notes: [{ string: '7', fret: 0 }] }
            if (p[step % p.length] === '6') return { notes: [{ string: '7', fret: 6 }] }
          }
        }
      ]
    },
  ]
}