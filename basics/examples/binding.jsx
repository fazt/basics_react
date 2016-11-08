import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      message: ''
    }
  }
  componentWillMount() {
    this.setState({greeting: this.props.greeting});
  }
  componentDidMount(){
    this.refs.input.focus();
  }
  handleChange(event) {
    this.setState({message: event.target.value })
  }
  handleClear(event){
    this.refs.input.value = '';
    this.setState({message: ''});
  }
  render() {
    return <div>
      <h1>Refs and Data binding</h1>
      <h2>{this.state.greeting}</h2>
      Type a message:
      <br/>
      <input type="text" ref="input" onChange={this.handleChange.bind(this)}/>
      <br/>
      Your message: {this.state.message}
      <br/>
      <input type="button" value="Limpiar" onClick={this.handleClear.bind(this)}/>
    </div>
  }
}

render(<App greeting="hola mundo"/>,document.getElementById('app'));
