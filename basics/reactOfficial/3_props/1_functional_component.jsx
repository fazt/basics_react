import React from 'react';
import {render} from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return <div>
    <Welcome name="fabian"/>
    <Welcome name="ashley"/>
    <Welcome name="jesus"/>
  </div>
}

render(<App/>, document.getElementById('app'));
