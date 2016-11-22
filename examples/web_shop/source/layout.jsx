import React from 'react';

const Layout = React.createClass({
  render: function() {
    return (<div>
      { React.cloneElement(
        this.props.children,
        this.state
      ) }
    </div>);
  }
});
