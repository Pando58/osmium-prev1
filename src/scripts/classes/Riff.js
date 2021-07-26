export default class Riff {
  constructor(fn) {
    this.fn = fn;
  }

  play(step) {
    const data = this.fn(step);

    if (!data) return null;

    return {
      notes: data.notes || [],
      instrumentControls: data.instrument_controls || [],
      trackControls: data.track_controls || []
    }
  }
}