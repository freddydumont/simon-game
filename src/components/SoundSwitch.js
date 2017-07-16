import React from 'react';
import soundsPkm from '../images/sounds_pkm.svg';
import soundsSmn from '../images/sounds_smn.svg';

const SoundSwitch = () => {
  return (
    <div className="sound-switch">
      <img className="switch" src={soundsPkm} alt="Sound Switch" />
    </div>
  );
}

export default SoundSwitch;