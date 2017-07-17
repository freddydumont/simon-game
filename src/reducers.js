import { combineReducers } from 'redux';
import { SWITCH_MODE, SWITCH_SOUNDS } from './actions.js';

// STRICT MODE
function isStrictMode(state = false, action) {
  switch (action.type) {
    case SWITCH_MODE:
      return !state;
    default:
      return state;
  }
};

// SOUNDS
function isPokeSounds(state = true, action) {
  switch (action.type) {
    case SWITCH_SOUNDS:
      return !state;
    default:
      return state;
  }
};

const reducer = combineReducers({ isStrictMode, isPokeSounds });
export default reducer;