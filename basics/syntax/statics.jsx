import React from 'react';

const App = React.createClass({
  statics: {
    myMethod: (foo) => {
      return foo === 'bar';
    }
  },
  render: {
    return null;
  }
});
console.log(App.myMethod('bar'));
