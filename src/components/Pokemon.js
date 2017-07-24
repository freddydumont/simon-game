import React from 'react';
import { connect } from 'react-redux';
import { clickPokemon } from '../actions';

let Pokemon = ({ image, key, isPlayerTurn, clickPokemon }) => {
  return (
    <div className="pokemon" >
      <img
        src={image} alt="Pokemon"
        onClick={() => {
          if (isPlayerTurn) {
            clickPokemon(key);
          }
        }} />
    </div>
  );
}

const mapStateToProps = ({ isPlayerTurn }) => ({ isPlayerTurn });
Pokemon = connect(mapStateToProps, { clickPokemon })(Pokemon);
export default Pokemon;