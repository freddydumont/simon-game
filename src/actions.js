import { errorSound } from './sounds.js';

// TURN GAME ON OFF
export const TURN_GAME_ON = 'TURN_GAME_ON';

export function turnGameOn() {
  // create a sequence of 20 numbers between 0 and 3
  let sequence = [];
  for (let i = 0; i < 20; i++) {
    sequence.push(Math.floor(Math.random() * 4));
  }
  return {
    type: TURN_GAME_ON,
    payload: sequence
  }
}

export const TURN_GAME_OFF = 'TURN_GAME_OFF';

export function turnGameOff() {
  return {
    type: TURN_GAME_OFF
  }
}

// SWITCH MODE
export const SWITCH_MODE = 'SWITCH_MODE';

export function switchMode() {
  return {
    type: SWITCH_MODE
  }
}

// SWITCH SOUNDS
export const SWITCH_SOUNDS = 'SWITCH_SOUNDS';

export function switchSounds(pos) {
  return {
    type: SWITCH_SOUNDS,
    payload: pos
  }
}

// START GAME
export const START_GAME = 'START_GAME';

export function startGame() {
  // using redux-sequence-action middleware to chain actions
  // and redux-thunk to resolve action creators
  return [
    {
      type: START_GAME
    },
    // after startGame, call createLevel with updated store
    (dispatch, getState) => {
      const { count, sequence } = getState();
      dispatch(createLevel(count, sequence));
    }
  ]
}

// CREATE LEVEL (create a level corresponding to count out of sequence)
export const CREATE_LEVEL = 'CREATE_LEVEL';

export function createLevel(count, sequence) {
  const level = sequence.slice(0, count);
  return [
    {
      type: CREATE_LEVEL,
      payload: level
    },
    // after level is created, call playLevel with a slight delay
    dispatch => {
      setTimeout(function () {
        dispatch(playLevel());
      }, 500);
    }
  ]
}

// PLAY LEVEL
export const PLAY_LEVEL = 'PLAY_LEVEL';

// for each element in level, play sound and glow corresponding pokemon
function playLevel() {
  return (dispatch, getState) => {
    const { level } = getState();
    // recursive IIFE takes care of playing each pokemon successively
    (function playRecursively(i) {
      // base case
      if (i >= level.length) {
        // when all are played, dispatch PLAY_LEVEL to set isPlayerTurn to true
        return [
          dispatch({ type: PLAY_LEVEL }),
          dispatch(playerTurn())
        ];
      };
      // recursive case is within playSoundAndGlow
      playSoundAndGlow(dispatch, getState, level[i], playRecursively, i);
    })(0)
  }
}

// PLAY SOUND AND GLOW POKEMON
function playSoundAndGlow(dispatch, getState, pokeNumber, playRecursively, i) {
  const { sounds, isPlayerTurn } = getState()
  // on play, glow pokemon corresponding to pokeNumber
  sounds[pokeNumber].once('play', () => {
    dispatch(glowPokemon(pokeNumber));
  })
  // on end, set glowing to null
  sounds[pokeNumber].once('end', () => {
    dispatch(glowPokemon(null));
    // recursive case if isPlayerTurn is false
    if (!isPlayerTurn) {
      return playRecursively(i + 1);
    }
  })
  // play
  sounds[pokeNumber].play();
}

// GLOW POKEMON
export const GLOW_POKEMON = 'GLOW_POKEMON';

export function glowPokemon(number) {
  return {
    type: GLOW_POKEMON,
    payload: number
  }
}

// PLAYER_TURN
var timeout;
function playerTurn() {
  // set a timeout of 3 seconds that is disabled when user clicks a pokemon on his turn
  timeout = setTimeout(function () {
    // if user doesn't play in time, dispatch error
    error();
  }, 3000);
  return (dispatch, getState) => {
    const { sounds, level } = getState();
    console.log(sounds, level);
  }
}

function error() {
  // play error sound
  errorSound.play();
  // display error image under count
}

// INCREMENT COUNT
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export function incrementCount() {
  return {
    type: INCREMENT_COUNT
  }
}