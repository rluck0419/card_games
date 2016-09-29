import React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import LandingPage from './Components/LandingPage';
import CardGame from './Components/CardGame';

const router = (
  <Router history={browserHistory}>
    <Route path={"/"} component={LandingPage}/>
    <Route path={"/game/:gameName"} component={CardGame}/>
  </Router>
)

export default router;
