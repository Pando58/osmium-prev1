import * as Soundfont from 'soundfont-player'

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

    this.sfMetronome = Soundfont.instrument(this.project.ac, 'agogo');
    this.metronomeOn = true;
    this.metronomeGain = 0.6;
    this.metronomePitch = 70;
  }

  loop(delta) {
    const { bpm, subdivision, base } = this.project;

    this.position += delta;

    // Check ending and loop
    if (Math.floor(((this.position / 1000) * (bpm / 60)) / base) >= this.project.config.end) {
      this.position = 0;

      if (!this.project.config.loop) {
        this.stop();
      }
    }

    // Execute play functions
    const pos = this.position / 1000;
    const sub = Math.floor((pos * (bpm / 60)) * subdivision);
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

    if (this.musicalPosition.subbeat != sub) {
      this.musicalPosition.subbeat = sub;
      this.subbeat();
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

  subbeat() {
    this.project.play(
      this.musicalPosition.subbeat,
      this.musicalPosition.beat,
      this.musicalPosition.bar
    );

    console.log(`%c ${this.musicalPosition.subbeat}     Sub`, 'background: #222; color: #bada55');
    if (this.metronomeOn) this.sfMetronome.then(inst => inst.play(this.metronomePitch, 0, { gain: this.metronomeGain * 0.2 }));
  }

  beat() {
    console.log(`%c ${this.musicalPosition.beat}   Beat`, 'background: #222; color: #477eff');
    if (this.metronomeOn) this.sfMetronome.then(inst => inst.play(this.metronomePitch, 0, { gain: this.metronomeGain * 0.6 }));
  }

  bar() {
    console.log(`%c ${this.musicalPosition.bar} Bar`, 'background: #222; color: #ff3721');
    if (this.metronomeOn) this.sfMetronome.then(inst => inst.play(this.metronomePitch, 0, { gain: this.metronomeGain }));
  }

  play() {
    this.playing = true;

    requestAnimationFrame((timestamp) => {
      this.bar();
      this.beat();
      this.subbeat();

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