import React from 'react';
import bulbasaur from '../images/bulbasaur.svg';
import charmander from '../images/charmander.svg';
import pikachu from '../images/pikachu.svg';
import squirtle from '../images/squirtle.svg';

const Pokemon = ({ pos }) => {
  // assign pokemon image according to position in grid
  let pokemon;
  switch (pos) {
    case 1: pokemon = bulbasaur;
      break;
    case 2: pokemon = charmander;
      break;
    case 3: pokemon = pikachu;
      break;
    case 4: pokemon = squirtle;
      break;
    default: break;
  }

  return (
    <div className={`pokemon item-${pos}`} >
      <img src={pokemon} alt="Pokemon" />
    </div>
  );
}

export default Pokemon;