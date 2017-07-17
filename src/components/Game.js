import React from 'react';
import Pokemon from '../components/Pokemon';

const Game = () => (
  <div className="game">
    <div className="rectangle"></div>
    <div className="circle-black"></div>
    <div className="circle-white pokemon-container">
      <Pokemon pos={1} />
      <Pokemon pos={2} />
      <Pokemon pos={3} />
      <Pokemon pos={4} />
    </div>
  </div>
);

export default Game;