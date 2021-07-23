import '../styles/main.scss'
import * as Tone from 'tone'
import ProjectLoader from './classes/ProjectLoader'

import example from '../../examples/concatenation'

const project = ProjectLoader.openProject(example);



document.getElementById('play').onclick = async () => {
  await Tone.start();
  
  Tone.loaded().then(() => {
    project.togglePlay();
  });
}
