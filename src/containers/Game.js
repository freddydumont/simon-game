import React from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import pokeImages from '../pokemonImages';

let Game = ({ glowing }) => {
  return (
    <div className="game">
      <div className="rectangle"></div>
      <div className="circle-black"></div>
      <div className="circle-white pokemon-container">
        <Pokemon image={pokeImages[glowing === 0 ? 'bulbasaurGlow' : 'bulbasaur']} />
        <Pokemon image={pokeImages[glowing === 1 ? 'charmanderGlow' : 'charmander']} />
        <Pokemon image={pokeImages[glowing === 2 ? 'pikachuGlow' : 'pikachu']} />
        <Pokemon image={pokeImages[glowing === 3 ? 'squirtleGlow' : 'squirtle']} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isGameStarted: state.isGameStarted,
    isStrictMode: state.isStrictMode,
    sounds: state.isPokeSounds ? state.pokeSounds : state.simonSounds,
    sequence: state.sequence ? state.sequence.slice(0, state.count) : null,
    glowing: state.glowing
  }
}

Game = connect(mapStateToProps)(Game);
export default Game;