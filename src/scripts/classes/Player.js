import * as Soundfont from 'soundfont-player'

export default class Player {
  constructor(ac, voices) {
    this.voices = {};
    for (let key in voices) {
      this.voices[key] = new Soundfont.instrument(ac, voices[key]);
    }
  }

  play(voice, note) {
    this.voices[voice].then(inst => {
      inst.play(String(note));
    });
  }

  stop(voice) {
    const stop = (inst) => {
      inst.stop();
    }

    if (!voice) {
      for (let key in this.voices) {
        this.voices[key].then(stop);
      }

      return;
    }

    this.voices[voice].then(stop);
  }
}