import React from 'react';
import { connect } from 'react-redux';
import countLabel from '../images/count.svg';
import gold from '../goldImages'

let Count = ({ count }) => {
  return (
    <div className="count">
      <img src={countLabel} alt="Count" />
      <img src={gold[`gold${count}`]} alt={count} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

Count = connect(mapStateToProps)(Count);
export default Count;