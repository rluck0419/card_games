import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
  startGame() {

    // let route = this.props.game.join(' ');
    browserHistory.push(`/game/${this.props.game}`);
  },
  componentDidMount() {
  },
  render() {
    return (
      <li className="landing-page-component" onClick={this.startGame}>
        <h2>{this.props.game}</h2>
      </li>
    );
  }
});
