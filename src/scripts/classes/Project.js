import TimeTracker from './TimeTracker'
import Track from './Track'

export default class Project {
  constructor({ bpm, base, subdivision } = {}, config = {}) {
    this.bpm = bpm || 60;
    this.base = base || 4;
    this.subdivision = subdivision || 1;
    this.ac = new AudioContext();

    this.config = {
      loop: config.loop || false,
      end: config.end || 0
    }

    this.tracks = [];

    this.timeTracker = new TimeTracker(this);
  }

  addTrack(voices) {
    const track = new Track(this, this.ac, voices);
    this.tracks.push(track);

    return track;
  }

  play(sub, beat, bar) {
    this.tracks.forEach(i => i.play(sub, beat, bar));
  }

  stop() {
    this.tracks.forEach(i => i.stop());
  }
}