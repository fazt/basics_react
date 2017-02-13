import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component{
  constructor(){
    super();
    this.state = {greeting:'Hello from the state'}
  }
  render() {
    return(
      <div>
      {this.state.greeting}
      </div>
    )
  }
}

render(<App/>
  , document.querySelector('#app'));
