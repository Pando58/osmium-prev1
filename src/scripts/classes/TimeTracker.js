import * as Tone from 'tone'
import hhat from '../../sounds/drum_kit/metronome/Hi Hat 14.wav'

export default class Player {
  constructor(project) {
    this.project = project;

    this.playing = false;
    this.position = 0;
    this.musicalPosition = {
      subbeat: 0,
      beat: 0,
      bar: 0
    }

    this.metronomeOn = false;
    
    this.metronomeSampler = new Tone.Sampler({
      C3: hhat
    }).toDestination();
  }

  loop(delta) {
    const { bpm, base } = this.project;

    this.position += delta;

    // Check ending and loop
    if (((this.position / 1000) * (bpm / 60)) / base >= this.project.config.end) {
      if (!this.project.config.loop) {
        this.stop();
        return;
      }
      
      this.position = 0;
    }

    // console.log( ((this.position / 1000) * (bpm / 60)).toFixed(2) );
    this.project.tick( ((this.position / 1000) * (bpm / 60)) );

    // For testing metronome
    const pos = this.position / 1000;
    const beat = Math.floor(pos * (bpm / 60));
    const bar = Math.floor((pos * (bpm / 60)) / base);

    if (this.musicalPosition.bar != bar) {
      this.musicalPosition.bar = bar;
      this.bar();
    }
    
    if (this.musicalPosition.beat != beat) {
      this.musicalPosition.beat = beat;
      this.beat();
    }
  }

  deltaTime(ts, last_ts) {
    if (!this.playing) return;

    if (ts === undefined) ts = 0;
    if (last_ts === undefined) last_ts = ts;

    const delta = ts - last_ts;

    this.loop(delta);

    requestAnimationFrame((timestamp) => {
      this.deltaTime(timestamp, ts);
    });
  }

  beat() {
    // console.log(`%c ${this.musicalPosition.beat}   Beat`, 'background: #222; color: #477eff');
    if (this.metronomeOn) this.metronomeSampler.triggerAttackRelease('C3', 1);
  }

  bar() {
    // console.log(`%c ${this.musicalPosition.bar} Bar`, 'background: #222; color: #ff3721');
    // if (this.metronomeOn) this.sfMetronome.then(inst => inst.play(this.metronomePitch, 0, { gain: this.metronomeGain }));
  }

  play() {
    if (this.playing) return;
    
    this.playing = true;

    requestAnimationFrame((timestamp) => {
      this.bar();
      this.beat();

      this.deltaTime(timestamp);
    })
  }

  stop() {
    this.playing = false;
    this.position = 0;
    this.musicalPosition.subbeat = 0;
    this.musicalPosition.beat = 0;
    this.musicalPosition.bar = 0;
    
    this.project.stop();
  }

  togglePlay() {
    if (this.playing) {
      this.stop();
    } else {
      this.play();
    }
  }
}