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
      onClick={() => { isPokeSounds ? switchSounds(1) : switchSounds(0) }}
      alt="Sound Switch" />
  );
}

const mapStateToProps = state => {
  return {
    isPokeSounds: state.isPokeSounds
  }
}

SoundSwitch = connect(mapStateToProps, { switchSounds })(SoundSwitch);

export default SoundSwitch;