import { combineReducers } from 'redux';
import { SWITCH_MODE } from './actions.js';

// STRICT MODE
function isStrictMode(state = false, action) {
  switch (action.type) {
    case SWITCH_MODE:
      return !state;
    default:
      return state;
  }
};

const reducer = combineReducers({ isStrictMode });
export default reducer;