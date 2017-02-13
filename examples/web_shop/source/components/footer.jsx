import React from 'react';

const Footer = React.createClass({
  render() {
    return(
      <footer className="footer text-center">
        <div className="container">
          <p className="text-muted">
            Copyright 2015 Your Webshop
          </p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
