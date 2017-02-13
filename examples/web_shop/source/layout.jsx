import React from 'react';
import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';

const Layout = React.createClass({
  render() {
    return (<div>
      <Menu/>
      {/* { React.cloneElement(
        this.props.children,
        this.state
      ) } */}
      {this.props.children}
      <Footer/>
    </div>);
  }
});
