import React from 'react';

const Pokemon = ({ pos, image }) => {
  return (
    <div className={`pokemon item-${pos}`} >
      <img src={image} alt="Pokemon" />
    </div>
  );
}

export default Pokemon;