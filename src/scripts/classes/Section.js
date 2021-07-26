import Riff from './Riff'

export default class Section {
  constructor(start, end, subdivision, riff) {
    this.start = start;
    this.end = end;
    this.subdivision = subdivision;
    this.riff = new Riff(riff);

    this.step = -1;
  }

  getData(time) {
    const localTime = time - this.start;
    const nextStep = Math.floor(localTime * this.subdivision);
    
    if (this.step !== nextStep) {
      this.step = nextStep;
      return this.riff.play(this.step);
    }

    return null;
  }
}