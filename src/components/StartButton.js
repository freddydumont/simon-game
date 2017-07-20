import React, { Component } from 'react';
import { connect } from 'react-redux';
import start from '../images/start.svg';
import startPressed from '../images/start_pressed.svg';

class StartButton extends Component {
  state = { image: start }
  render() {
    return (
      <img
        className="switch"
        src={this.state.image}
        onMouseDown={() => this.setState({ image: startPressed })}
        onMouseUp={() => this.setState({ image: start })}
        alt="Start Button" />
    );
  }
}

const mapStateToProps = state => {
  return {
    isGameStarted: state.isGameStarted
  }
}

StartButton = connect(mapStateToProps)(StartButton);
export default StartButton;