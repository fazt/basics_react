import React, { Component } from 'react';
import { render } from 'react-dom';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
      socket: window.io('http://localhost:3000'),
      user: undefined
    }
  }

  componentDidMount() {
    var self = this;
    this.state.socket.on('receive-msg', (msg) => {
      var messages = self.state.messages;
      messages.push(msg);
      self.setState({messages: messages });
    });
  }

  render() {
    var self = this;
    var messages = this.state.messages.map((msg, i) => {
      return  (<li key={i}><strong>{msg.user}: </strong>{msg.body}</li>)
    });

    return (
      <div>
        <ul>
          {messages}
        </ul>
        <input id="message" type="text"/>
        <button onClick={() => self.submitMesage()}>send message</button>
        <br/>
        <input id="user" type="text" placeholder="choose a username"/>
        <button onClick={() => self.pickUser()}>select user</button>
      </div>
    );
  }

  submitMesage(){
    var body  = document.getElementById('message').value;
    var message = {
      body: body,
      user: this.state.user || 'guest'
    }
    this.state.socket.emit('new message', message);
  }

  pickUser(){
    var user = document.getElementById('user').value;
    this.setState({user: user});
  }
}

render( <Chat/>, document.getElementById('app'));
