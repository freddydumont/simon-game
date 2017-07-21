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
    (dispatch, getState) => {
      const { level, sounds } = getState();
      setTimeout(function () {
        dispatch(playLevel(level, sounds));
      }, 500);
    }
  ]
}

// PLAY LEVEL
export const PLAY_LEVEL = 'PLAY_LEVEL';

export function playLevel(level, sounds) {
  // for each element in level, play sound and glow corresponding pokemon
  return dispatch => {
    level.forEach(element => {
      sounds[element].once('play', () => {
        // glow pokemon
        dispatch(glowPokemon(element));
      })
      sounds[element].once('end', () => {
        // set glowing to null
        dispatch(glowPokemon(null));
      })
      sounds[element].play();
    });
  }
}

// GLOW POKEMON (when playing sequence or on click)
export const GLOW_POKEMON = 'GLOW_POKEMON';

export function glowPokemon(number) {
  return {
    type: GLOW_POKEMON,
    payload: number
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

// INCREMENT COUNT
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export function incrementCount() {
  return {
    type: INCREMENT_COUNT
  }
}