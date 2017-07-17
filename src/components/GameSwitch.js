import React from 'react';
import gameOn from '../images/game_on.svg';
import gameOff from '../images/game_off.svg';

const GameSwitch = () => {
  return (
    <img className="switch" src={gameOn} alt="Game Switch" />
  );
}

export default GameSwitch;