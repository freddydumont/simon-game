import React from 'react';
import { connect } from 'react-redux';
import { clickPokemon } from '../actions';

let Pokemon = ({ image, num, isPlayerTurn, isGameOn, clickPokemon, level }) => {
  return (
    <div className="pokemon" >
      <img
        src={image} alt="Pokemon"
        onClick={() => {
          if (isPlayerTurn && isGameOn && level) {
            clickPokemon(num);
          }
        }} />
    </div>
  );
}

const mapStateToProps = ({ isPlayerTurn, isGameOn, level }) => ({ isPlayerTurn, isGameOn, level });
Pokemon = connect(mapStateToProps, { clickPokemon })(Pokemon);
export default Pokemon;