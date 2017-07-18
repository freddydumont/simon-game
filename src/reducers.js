import { combineReducers } from 'redux';
import { Howl } from 'howler';
import { SWITCH_MODE, SWITCH_SOUNDS, SWITCH_GAME } from './actions.js';
// import sounds
import bulbasaur from './sounds/cry-bulbasaur.mp3'
import charmander from './sounds/cry-charmander.mp3'
import pikachu from './sounds/cry-pikachu.mp3'
import squirtle from './sounds/cry-squirtle.mp3'
import simonSound1 from './sounds/simonSound1.mp3'
import simonSound2 from './sounds/simonSound2.mp3'
import simonSound3 from './sounds/simonSound3.mp3'
import simonSound4 from './sounds/simonSound4.mp3'

// create initial pokeSounds array
let pokeSoundsArray = [bulbasaur, charmander, pikachu, squirtle];
let initialPokeSounds = [];
for (let i = 0; i < 4; i++) {
  initialPokeSounds.push(new Howl({
    src: [pokeSoundsArray[i]]
  }))
}

// create initial simonSounds array
let simonSoundsArray = [simonSound4, simonSound3, simonSound2, simonSound1]
let initialSimonSounds = [];
for (let i = 0; i < 4; i++) {
  initialSimonSounds.push(new Howl({
    src: [simonSoundsArray[i]]
  }))
}

/*****************
 * GAME ON OFF
 ****************/
function isGameStarted(state = false, action) {
  switch (action.type) {
    case SWITCH_GAME:
      return !state;
    default:
      return state;
  }
};

/*****************
 * STRICT MODE
 ****************/
function isStrictMode(state = false, action) {
  switch (action.type) {
    case SWITCH_MODE:
      return !state;
    default:
      return state;
  }
};

/*****************
 * SOUNDS
 ****************/
function isPokeSounds(state = true, action) {
  switch (action.type) {
    case SWITCH_SOUNDS:
      return !state;
    default:
      return state;
  }
};

function pokeSounds(state = initialPokeSounds, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function simonSounds(state = initialSimonSounds, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const reducer = combineReducers({
  isGameStarted,
  isStrictMode,
  isPokeSounds,
  pokeSounds,
  simonSounds
});
export default reducer;