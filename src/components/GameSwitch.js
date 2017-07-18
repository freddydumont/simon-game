import React from 'react';
import { connect } from 'react-redux';
import { turnGameOn, turnGameOff } from '../actions';
import gameOn from '../images/game_on.svg';
import gameOff from '../images/game_off.svg';

let GameSwitch = ({ isGameStarted, turnGameOn, turnGameOff }) => {
  return (
    <img
      className="switch"
      src={isGameStarted ? gameOn : gameOff}
      onClick={isGameStarted ? turnGameOff : turnGameOn}
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
    turnGameOn: () => dispatch(turnGameOn()),
    turnGameOff: () => dispatch(turnGameOff())
  }
}

GameSwitch = connect(mapStateToProps, mapDispatchToProps)(GameSwitch);
export default GameSwitch;