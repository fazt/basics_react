import React from 'react';
import {render} from 'react-dom';

const user = {
  firstName: 'fabian',
  lastName: 'Napa'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = (
  <div>{getGreeting(user)}</div>
);

render(element,document.getElementById('app'));
