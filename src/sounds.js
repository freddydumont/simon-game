import { Howl } from 'howler'
import bulbasaur from './sounds/cry-bulbasaur.mp3'
import charmander from './sounds/cry-charmander.mp3'
import pikachu from './sounds/cry-pikachu.mp3'
import squirtle from './sounds/cry-squirtle.mp3'
import simonSound1 from './sounds/simonSound1.mp3'
import simonSound2 from './sounds/simonSound2.mp3'
import simonSound3 from './sounds/simonSound3.mp3'
import simonSound4 from './sounds/simonSound4.mp3'

// take an array of mp3s and turn it into an array of howls
function createSounds(soundSource) {
  let sounds = [];
  for (let i = 0; i < 4; i++) {
    sounds.push(new Howl({
      src: [soundSource[i]]
    }))
  }
  return sounds;
}

// export an array containing an array of poke sounds and one of simon sounds
export default [
  createSounds([bulbasaur, charmander, pikachu, squirtle]),
  createSounds([simonSound4, simonSound3, simonSound2, simonSound1])
]