import React from 'react';
import {render} from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, World</h1>,
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  render(element,document.getElementById('app'));
}

setInterval(tick, 1000);
