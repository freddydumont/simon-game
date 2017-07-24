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
        <Pokemon image={pokeImages[glowing === 0 ? 'bulbasaurGlow' : 'bulbasaur']} key={0} />
        <Pokemon image={pokeImages[glowing === 1 ? 'charmanderGlow' : 'charmander']} key={1} />
        <Pokemon image={pokeImages[glowing === 2 ? 'pikachuGlow' : 'pikachu']} key={2} />
        <Pokemon image={pokeImages[glowing === 3 ? 'squirtleGlow' : 'squirtle']} key={3} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ glowing }) => ({ glowing });

Game = connect(mapStateToProps)(Game);
export default Game;