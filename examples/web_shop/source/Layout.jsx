import React from 'react';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

const Layout = React.createClass({
  render : function () {
    return (
      <div>
        {/* <h1>nav</h1> */}
      <Menu/>
      {this.props.children}
      <Footer/>
    </div>);
  }
});

export default Layout;
