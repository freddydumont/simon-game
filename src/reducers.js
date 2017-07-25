import { combineReducers } from 'redux';
import {
  SWITCH_MODE,
  SWITCH_SOUNDS,
  TURN_GAME_ON,
  TURN_GAME_OFF,
  START_GAME,
  CREATE_LEVEL,
  INCREMENT_COUNT,
  GLOW_POKEMON,
  PLAY_LEVEL,
  ERROR,
  RESET,
  CLICK_POKEMON
} from './actions.js';
import Howls from './sounds';

/*****************
 * GAME ON OFF
 ****************/
function isGameOn(state = false, action) {
  switch (action.type) {
    case TURN_GAME_ON:
      return true;
    default:
      return state;
  }
};

function isGameStarted(state = false, action) {
  switch (action.type) {
    case START_GAME:
      return true;
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

function sounds(state = Howls[0], action) {
  switch (action.type) {
    case SWITCH_SOUNDS:
      return Howls[action.payload];
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
    case START_GAME:
      return 1;
    case ERROR:
      return 'error';
    case RESET:
      return action.payload;
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
    case GLOW_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

/*****************
 * PLAYER TURN
 ****************/
function isPlayerTurn(state = false, action) {
  switch (action.type) {
    case PLAY_LEVEL:
      return true;
    case START_GAME:
    case CREATE_LEVEL:
    case TURN_GAME_ON:
    case ERROR:
      return false;
    default:
      return state;
  }
}

/*****************
 * USER INPUTS
 ****************/
function userInputs(state = [], action) {
  switch (action.type) {
    case CLICK_POKEMON:
      return action.payload;
    case RESET:
    case INCREMENT_COUNT:
      return [];
    default:
      return state;
  }
};

const appReducer = combineReducers({
  isGameOn,
  isGameStarted,
  isStrictMode,
  isPokeSounds,
  isPlayerTurn,
  sounds,
  count,
  sequence,
  level,
  userInputs,
  glowing
});

const rootReducer = (state, action) => {
  if (action.type === TURN_GAME_OFF) {
    state = undefined;
  }
  return appReducer(state, action)
}
export default rootReducer;