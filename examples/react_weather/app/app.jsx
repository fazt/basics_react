import React from 'react';
import { render } from 'react-dom';
var {Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
