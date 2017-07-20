import { combineReducers } from 'redux';
import { Howl } from 'howler';
import {
  SWITCH_MODE,
  SWITCH_SOUNDS,
  TURN_GAME_ON,
  TURN_GAME_OFF,
  START_GAME,
  CREATE_LEVEL,
  INCREMENT_COUNT,
  ACTIVATE_POKEMON
} from './actions.js';
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
function isGameOn(state = false, action) {
  switch (action.type) {
    case TURN_GAME_ON:
      return true;
    case TURN_GAME_OFF:
      return false;
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

/*****************
 * COUNT
 ****************/
function count(state = null, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case TURN_GAME_ON:
      return 0;
    case TURN_GAME_OFF:
      return null;
    case START_GAME:
      return 1;
    default:
      return state;
  }
}

/*****************
 * SEQUENCE
 ****************/
function sequence(state = null, action) {
  switch (action.type) {
    case TURN_GAME_ON:
      return action.payload;
    default:
      return state;
  }
};

/*****************
 * LEVEL
 ****************/
function level(state = null, action) {
  switch (action.type) {
    case CREATE_LEVEL:
      return action.payload;
    default:
      return state;
  }
};

/*****************
 * GLOW
 ****************/
function glowing(state = null, action) {
  switch (action.type) {
    case ACTIVATE_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isGameOn,
  isStrictMode,
  isPokeSounds,
  pokeSounds,
  simonSounds,
  count,
  sequence,
  level,
  glowing
});
export default reducer;