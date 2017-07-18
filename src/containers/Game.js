import React from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import pokeImages from '../pokemonImages';

let Game = () => {
  return (
    <div className="game">
      <div className="rectangle"></div>
      <div className="circle-black"></div>
      <div className="circle-white pokemon-container">
        <Pokemon image={pokeImages['bulbasaur']} />
        <Pokemon image={pokeImages['charmander']} />
        <Pokemon image={pokeImages['pikachu']} />
        <Pokemon image={pokeImages['squirtle']} />
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