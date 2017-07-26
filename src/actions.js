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
  clearTimeout(timeout);
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
      }, 1000);
    }
  ]
}

// PLAY LEVEL
export const PLAY_LEVEL = 'PLAY_LEVEL';

// for each element in level, play sound and glow corresponding pokemon
function playLevel() {
  return (dispatch, getState) => {
    const { level, isGameOn } = getState();
    if (isGameOn && level !== []) {
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
}

// PLAY SOUND AND GLOW POKEMON
function playSoundAndGlow(dispatch, getState, pokeNumber, playRecursively, i) {
  const { sounds, isPlayerTurn, isGameOn, level } = getState()
  if (isGameOn) {
    // on play, glow pokemon corresponding to pokeNumber
    sounds[pokeNumber].once('play', () => {
      dispatch(glowPokemon(pokeNumber));
    })
    // on end, set glowing to null
    sounds[pokeNumber].once('end', () => {
      if (isGameOn) {
        dispatch(glowPokemon(null));
        // recursive case if isPlayerTurn is false
        // null check on level to avoid infinite game loop on certain edge cases
        // ex: TURN_GAME_ON and ...OFF are dispatched between onPlay and onEnd
        if (level !== null) {
          if (!isPlayerTurn) {
            return playRecursively(i + 1);
          }
        }
      }
    })
    // play
    sounds[pokeNumber].play();
  }
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
  return (dispatch, getState) => {
    if (getState().isGameOn) {
      // set a timeout that is disabled when user clicks a pokemon on his turn
      timeout = setTimeout(function () {
        // if user doesn't play in time, dispatch error
        dispatch(error());
      }, 3000);
    }
  }
}

// USER INPUTS
export const CLICK_POKEMON = 'CLICK_POKEMON';

export function clickPokemon(pokeNumber) {
  // first thing to do is to stop the timer
  clearTimeout(timeout);
  // then dispatch the updated userInputs
  return [
    (dispatch, getState) => {
      const { userInputs } = getState();
      // clone userInputs and add last user input to it
      let inputs = userInputs.length > 0 ? userInputs.slice() : [];
      inputs.push(pokeNumber);
      dispatch({ type: CLICK_POKEMON, payload: inputs });
    },
    // then check if user pressed the correct pokemon
    (dispatch, getState) => {
      const { level, userInputs } = getState();
      // compare last number in inputs to equivalent in level
      let current = userInputs.length - 1;
      if (userInputs[current] !== level[current]) {
        return dispatch(error());
      } else {
        playSoundAndGlow(dispatch, getState, pokeNumber);
      }
      // check if inputs and level have the same length to know if level is done
      if (level.length === userInputs.length) {
        // level is completed, increment count and create a new level
        dispatch(incrementCount());
        const { count, sequence } = getState();
        // if count > 20, game is won, dispatch win action
        if (count > 20) {
          return dispatch(gameWon());
        } else {
          return dispatch(createLevel(count, sequence));
        }
      } else {
        // level is not completed, call playerTurn to restart the timeout
        return dispatch(playerTurn());
      }
    }
  ]
}

// ERROR
export const ERROR = 'ERROR';
export const RESET = 'RESET';

function error() {
  return (dispatch, getState) => {
    let { count, sequence, isStrictMode, isGameOn } = getState();
    if (isGameOn) {
      // will set count to 'error' to display error image
      errorSound.once('play', () => {
        dispatch({ type: ERROR });
      })

      // will set count to 1 if strict mode and previous count if not
      // and dispatch createLevel to restart
      if (isStrictMode) {
        count = 1;
      }

      errorSound.once('end', () => {
        if (getState().isGameOn) {
          dispatch({ type: RESET, payload: count });
          dispatch(createLevel(count, sequence));
        }
      })
      // play error sound
      errorSound.play();
    }
  }
}

// INCREMENT COUNT
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

function incrementCount() {
  return {
    type: INCREMENT_COUNT
  }
}

// GAME WON
export const WIN = 'WIN';

function gameWon() {
  // create a new sequence for next game
  let sequence = [];
  for (let i = 0; i < 20; i++) {
    sequence.push(Math.floor(Math.random() * 4));
  }
  return {
    type: WIN,
    payload: sequence
  }
}