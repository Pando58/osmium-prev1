import Player from './Player'

export default class Instrument {
  constructor(ac, voices) {
    this.player = new Player(ac, voices);
  }

  play() {}

  stop() {
    this.player.stop();
  }
}



/* 


GUITAR

play({
  string: ,
  fret: ,
})

DRUMS

play({
  inst: ,
})


*/