import React from 'react';
import regular from '../images/regular.svg';
import strict from '../images/strict.svg';

const ModeButton = () => {
  return (
    <img className="btn-mode" src={regular} alt="Mode button" />
  );
}

export default ModeButton;