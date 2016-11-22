import React from 'react';
import Layout from './layout.jsx';
import { Router, Route, browserHistory } from 'react-router';

const Routes = (
  <Router history={browserHistory}>
    <Route handler={Layout} path="/"></Route>
  </Router>
);

module.exports = Routes;
