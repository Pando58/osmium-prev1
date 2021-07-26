export default {
  bpm: 133,
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
            const p = '00----00--00-0--00--00---';

            if (p[step % p.length] === '0') {
              return {
                notes: [{ note: true }]
              }
            }
          }
        }
      ]
    },
    {
      instrument: 'guitar',
      volume: -3,
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 4,
          riff: step => {
            const p = '10----01--01-1--10--01---';

            let notes = null;

            if (p[step % p.length] === '0') notes = [{ note: { string: '6', fret: -10 } }];
            if (p[step % p.length] === '1') notes = [{ note: { string: '6', fret: 3 } }];

            if (notes) return {
              notes: notes
            };
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

            if (p[step % p.length] === '0') {
              return {
                notes: [{ note: true }]
              }
            }
          }
        }
      ]
    },
    {
      instrument: 'china',
      volume: -12,
      sections: [
        {
          start: 0,
          end: 8 * 4,
          subdivision: 1,
          riff: step => {
            return {
              notes: [{ note: true }]
            };
          }
        }
      ]
    },
    {
      instrument: 'crash',
      volume: -5,
      sections: [
        {
          start: 0,
          end: 2,
          subdivision: 1,
          riff: step => {
            return {
              notes: [{ note: step % 2 === 0 }]
            };
          }
        }
      ]
    }
  ]
}