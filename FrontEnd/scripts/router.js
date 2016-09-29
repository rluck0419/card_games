import React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import LandingPage from './Components/LandingPage';

const router = (
  <Router history={browserHistory}>
    <Route path={"/"} component={LandingPage}/>
  </Router>
)

export default router;
