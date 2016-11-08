import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      saludo: 'saludo por defecto',
      random_number: 0
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({random_number: Math.random()* 100 })
    },1000);
  }
  render() {
    return (<div>
      {this.props.greeting}
      <hr/>
      {this.state.saludo}
      <hr/>
      {this.state.random_number}
      </div>);
  }
}
App.defaultProps = {
  greeting: 'Defautl greeting'
}
App.propTypes =  {
myOptionalObject: React.PropTypes.object,
aRequiredString: React.PropTypes.string.isRequired,
anOptionalNumber: React.PropTypes.number,
aValueOfAnyKind: React.PropTypes.any,
customProp: function(props, propName, componentName) {
if (!/matchme/.test(props[propName])) {
return new Error('Validation failed!');
}
}
}
render(<App/>, document.getElementById('app'));
