import React from 'react';
import { connect } from 'react-redux';
import { switchMode } from '../actions';
import regular from '../images/regular.svg';
import strict from '../images/strict.svg';

let ModeButton = ({ isStrictMode, switchMode }) => {
  return (
    <img
      className="btn-mode"
      src={isStrictMode ? strict : regular}
      onClick={switchMode}
      alt="Mode button" />
  );
}

const mapStateToProps = state => {
  return {
    isStrictMode: state.isStrictMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchMode: () => dispatch(switchMode())
  }
}

ModeButton = connect(mapStateToProps, mapDispatchToProps)(ModeButton);

export default ModeButton;