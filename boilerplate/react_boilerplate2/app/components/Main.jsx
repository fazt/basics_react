const React = require('react');

var Main = (props) => {
  return (
    <div>
      <p>Main.jsx Rendeded</p>
      {props.children}
    </div>
  );
}

module.exports = Main;
