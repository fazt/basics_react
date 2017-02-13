import React from 'react';

const App = React.createClass({
  render: {
    return <h1>{this.displayName}</h1>
  }
});
console.log(App.displayName);
