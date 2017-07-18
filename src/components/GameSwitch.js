import React from 'react';
import { connect } from 'react-redux';
import { switchGame } from '../actions';
import gameOn from '../images/game_on.svg';
import gameOff from '../images/game_off.svg';

let GameSwitch = ({ isGameStarted, switchGame }) => {
  return (
    <img
      className="switch"
      src={isGameStarted ? gameOn : gameOff}
      onClick={switchGame}
      alt="Game Switch" />
  );
}

const mapStateToProps = state => {
  return {
    isGameStarted: state.isGameStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchGame: () => dispatch(switchGame())
  }
}

GameSwitch = connect(mapStateToProps, mapDispatchToProps)(GameSwitch);
export default GameSwitch;