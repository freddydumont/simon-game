// TURN GAME ON OFF
export const TURN_GAME_ON = 'TURN_GAME_ON';

export function turnGameOn() {
  return {
    type: TURN_GAME_ON
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

export function switchSounds() {
  return {
    type: SWITCH_SOUNDS
  }
}

// INCREMENT COUNT
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export function incrementCount() {
  return {
    type: INCREMENT_COUNT
  }
}