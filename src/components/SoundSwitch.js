import React from 'react';
import { connect } from 'react-redux';
import { switchSounds } from '../actions';
import soundsPkm from '../images/sounds_pkm.svg';
import soundsSmn from '../images/sounds_smn.svg';

let SoundSwitch = ({ isPokeSounds, switchSounds }) => {
  return (
    <img
      className="switch"
      src={isPokeSounds ? soundsPkm : soundsSmn}
      onClick={switchSounds}
      alt="Sound Switch" />
  );
}

const mapStateToProps = state => {
  return {
    isPokeSounds: state.isPokeSounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchSounds: () => dispatch(switchSounds())
  }
}

SoundSwitch = connect(mapStateToProps, mapDispatchToProps)(SoundSwitch);

export default SoundSwitch;