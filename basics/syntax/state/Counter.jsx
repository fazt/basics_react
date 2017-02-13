import React, { Component } from 'react';
import {render} from 'react-dom';

class Counter extends Component{
  constructor(){
    super();
    this.state = { count: 0 }
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount.bind(this)}>Increment</button>
      </div>
    )
  }

  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  }
}

render(
  <Counter/>,
  document.getElementById('app')
)
