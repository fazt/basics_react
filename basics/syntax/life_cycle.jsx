import React, {Component } from 'react';
import {render} from 'react-dom';

console.log('Start');
let App = React.createClass({
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
  },
  getInitialState: function () {
    return { status: true }
  },
  getDefaultProps: function () {
    return { name: 'fabian'}
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('componentWillReceiveProps');
  },
  shouldComponentUpdate: function(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  },
  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  },
  render:function () {
    console.log('render');
    return (
      <h1 onClick={this.toggleState}>
        {this.state.status.toString()}
      </h1>
    )
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  toggleState: function () {
    this.setState({
      status: !this.state.status
    })
  }
});

render(
  <App/>
  ,document.getElementById('app')
);
