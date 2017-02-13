import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component{
  render() {
    return(
      <div>
      {this.props.greeting}
      <h2>{this.props.message}</h2>
      </div>
    )
  }
}
// before this is called as a function 'getdefaultProps' in a react class
App.defaultProps = {
  greeting: 'This is a Default Greeting'
};

render(<App
  message = "Enjoy the day"
  />,
  document.querySelector('#app'));
