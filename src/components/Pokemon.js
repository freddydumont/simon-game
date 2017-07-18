import React from 'react';

const Pokemon = ({ pos, image }) => {
  return (
    <div className="pokemon" >
      <img src={image} alt="Pokemon" />
    </div>
  );
}

export default Pokemon;