import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
  constructor(){
    super();
    this.state = {
        greetting: ''
      , message: ''
    };
  }
  componentDidMount(){
    this.refs.input.focus();
  }
  handleChange(event){
    this.setState({
      message: event.target.value
    });
  }
  handleClear(){
    this.refs.input.value = '';
    this.setState({
      message: ''
    });
  }
  render() {
    return(
      <div>
        <h1>Refs and data bindings</h1>
        <h2>{this.state.greetting}</h2>
        Type a message:
        <br/>
        <input type="text" ref="input"
          onChange={this.handleChange.bind(this)}/>
        <br/>
        Your message:
        <input type="button" value="clear"
          onClick={this.handleClear.bind(this)}
        />
      </div>
    );
  }
}

render(
    <App greetting="Let's bind some values"/>
  , document.getElementById('app')
);
