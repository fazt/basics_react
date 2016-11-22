import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    console.log('compoenntWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  render() {
    console.log('render');
    return(<h1 onClick={this.toggleState.bind(this)}>
      {this.state.status.toString()}
    </h1>)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  toggleState() {
    this.setState({status: !this.state.status})
  }
}
App.defaultProps = {
  name: 'Fabian'
}




render(<App/>, document.getElementById('app'));
