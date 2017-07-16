import React, { Component } from 'react';
import title from './images/title.png'
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={title} alt="Poké(Si)mon" />
      </div>
    );
  }
}

export default App;
