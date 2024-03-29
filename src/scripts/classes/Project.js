import TimeTracker from './TimeTracker'
import Track from './Track'

export default class Project {
  constructor({ bpm, base } = {}, config = {}) {
    this.bpm = bpm || 60;
    this.base = base || 4;
    this.ac = new AudioContext();

    this.config = {
      loop: config.loop || false
    }

    this.end = 0;

    this.tracks = [];

    this.timeTracker = new TimeTracker(this);
  }

  addTrack({instrument, volume, pan, mute} = {}) {
    const track = new Track(this, {
      instrument: instrument,
      volume: volume,
      pan: pan,
      mute: mute
    });
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
    this.tracks.forEach(i => i.play());
  }

  onPlay() {
    this.timeTracker.play();
  }

  onStop() {
    this.timeTracker.stop();
  }

  togglePlay() {
    this.timeTracker.togglePlay();
  }

  calculateEndPosition() {
    let end = 0;

    this.tracks.forEach(track => {
      let finalPosition = 0;

      track.sections.forEach(section => {
        if (section.end > finalPosition) {
          finalPosition = section.end;
        }
      });

      if (finalPosition > end) {
        end = finalPosition;
      }
    });

    this.end = end;
  }
}