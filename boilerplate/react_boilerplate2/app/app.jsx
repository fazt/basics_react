import React from 'react';
import { render } from 'react-dom';
var {Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//Add css
require('style!css!sass!applicationStyles');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)
