import React from 'react';
import { connect } from 'react-redux';
import { clickPokemon } from '../actions';

let Pokemon = ({ image, num, isPlayerTurn, isGameOn, clickPokemon }) => {
  return (
    <div className="pokemon" >
      <img
        src={image} alt="Pokemon"
        onClick={() => {
          if (isPlayerTurn && isGameOn) {
            clickPokemon(num);
          }
        }} />
    </div>
  );
}

const mapStateToProps = ({ isPlayerTurn, isGameOn }) => ({ isPlayerTurn, isGameOn });
Pokemon = connect(mapStateToProps, { clickPokemon })(Pokemon);
export default Pokemon;