import React, { Component } from 'react';
import GameSwitch from '../components/GameSwitch'
import SoundSwitch from '../components/SoundSwitch'
import Game from '../containers/Game'
import title from '../images/title.png'
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="title" src={title} alt="Poké(Si)mon" />
        <div className="switches">
          <GameSwitch />
          <SoundSwitch />
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
