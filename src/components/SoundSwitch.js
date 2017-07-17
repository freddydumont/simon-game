import React from 'react';
import soundsPkm from '../images/sounds_pkm.svg';
import soundsSmn from '../images/sounds_smn.svg';

const SoundSwitch = () => {
  return (
    <img className="switch" src={soundsPkm} alt="Sound Switch" />
  );
}

export default SoundSwitch;