import React from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
// pokemon images
import bulbasaur from '../images/bulbasaur.svg';
import charmander from '../images/charmander.svg';
import pikachu from '../images/pikachu.svg';
import squirtle from '../images/squirtle.svg';

let Game = () => {
  return (
    <div className="game">
      <div className="rectangle"></div>
      <div className="circle-black"></div>
      <div className="circle-white pokemon-container">
        <Pokemon image={bulbasaur} />
        <Pokemon image={charmander} />
        <Pokemon image={pikachu} />
        <Pokemon image={squirtle} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isGameStarted: state.isGameStarted,
    isStrictMode: state.isStrictMode,
    sounds: state.isPokeSounds ? state.pokeSounds : state.simonSounds,
    sequence: state.sequence ? state.sequence.slice(0, state.count) : null
  }
}

Game = connect(mapStateToProps)(Game);
export default Game;