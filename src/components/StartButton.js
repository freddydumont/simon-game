import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import start from '../images/start.svg';
import startPressed from '../images/start_pressed.svg';

class StartButton extends Component {
  state = { image: start }
  render() {
    const { isGameOn, startGame } = this.props;
    return (
      <img
        className="switch"
        src={this.state.image}
        onMouseDown={() => this.setState({ image: startPressed })}
        onMouseUp={() => this.setState({ image: start })}
        onClick={isGameOn ? startGame : null}
        alt="Start Button" />
    );
  }
}

const mapStateToProps = state => {
  return {
    isGameOn: state.isGameOn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame())
  }
}

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton);
export default StartButton;