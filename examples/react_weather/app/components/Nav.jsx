import React from 'react';
var { IndexLink, Link } = require('react-router');

var Nav = () => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>

      <a href="#/about">Go to About</a>
    </div>
  );
};

module.exports = Nav;
