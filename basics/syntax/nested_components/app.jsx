import React from 'react';
import { render } from 'react-dom';

// presentational component
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name} !</h1>
        <p>{message}</p>
      </div>
    );
  }
});

// second presentational compoennt
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});

// container compoennt
// maintain the state of the app and udpate its childrens
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default Message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    return(

      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    )
  }
});

const firstName = 'fabian';
render(
  <Greeter/>,
  document.getElementById('app')
);
