import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return(
      <section>
        <h1>My Scaffold 3</h1>
        <p>Hello World</p>
      </section>
    )
  }
}

render(<App/>, document.getElementById('app'));
