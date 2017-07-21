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
        onMouseUp={() => setTimeout(() => {
          this.setState({ image: start })
        }, 100)}
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

StartButton = connect(mapStateToProps, { startGame })(StartButton);
export default StartButton;