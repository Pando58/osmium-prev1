import TimeTracker from './TimeTracker'
import Track from './Track'

export default class Project {
  constructor({ bpm, base } = {}, config = {}) {
    this.bpm = bpm || 60;
    this.base = base || 4;
    this.ac = new AudioContext();

    this.config = {
      loop: config.loop || false,
      end: config.end || 0
    }

    this.tracks = [];

    this.timeTracker = new TimeTracker(this);
  }

  addTrack(instrument) {
    const track = new Track(this.ac, instrument);
    this.tracks.push(track);

    return track;
  }

  tick(time) {
    this.tracks.forEach(i => i.tick(time));
  }

  stop() {
    this.tracks.forEach(i => i.stop());
  }

  play() {
    this.timeTracker.play();
  }

  togglePlay() {
    this.timeTracker.togglePlay();
  }
}