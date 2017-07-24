import React from 'react';
import { connect } from 'react-redux';
import { clickPokemon } from '../actions';

let Pokemon = ({ image, num, isPlayerTurn, clickPokemon }) => {
  return (
    <div className="pokemon" >
      <img
        src={image} alt="Pokemon"
        onClick={() => {
          if (isPlayerTurn) {
            clickPokemon(num);
          }
        }} />
    </div>
  );
}

const mapStateToProps = ({ isPlayerTurn }) => ({ isPlayerTurn });
Pokemon = connect(mapStateToProps, { clickPokemon })(Pokemon);
export default Pokemon;