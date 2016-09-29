import React from 'react';
import { browserHistory } from 'react-router';

import store from '../store';
import games from '../Collections/Games';

export default React.createClass({
  getInitialState() {
    return {
      // deck: store.deck.getCards(),
    }
  },
  componentDidMount() {
    // this.setState({deck: store.deck.getCards()});
  },
  render() {
    // let ga smeName = ;
    // console.log();
    return (
      <div className="card-game-component">
        yayayayaya
      </div>
    );
  }
});
