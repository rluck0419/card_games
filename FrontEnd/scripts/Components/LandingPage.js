import React from 'react';
import { browserHistory } from 'react-router';

import store from '../store';
import games from '../Collections/Games';
import GamePreview from './GamePreview';

export default React.createClass({
  getInitialState() {
    return {
      deck: store.deck.getCards(),
    }
  },
  componentDidMount() {
    this.setState({deck: store.deck.getCards()});
  },
  render() {
    let gameContainer = games.map((game, i) => {
      // console.log(game);
      return (<GamePreview key={i} game={game.name} />);
    });

    return (
      <ul className="landing-page-component">
        {gameContainer}
      </ul>
    );
  }
});
