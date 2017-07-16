import React from 'react';
import countLabel from '../images/count.svg';
import gold from '../images/gold/gold_20.svg';

const Count = () => {
  return (
    <div className="count">
      <img src={countLabel} alt="Count" />
      <img src={gold} alt="1" />
    </div>
  );
}

export default Count;