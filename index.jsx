import React, { Component } from 'react';
import { render } from 'react-dom';

class Heading extends Component {
  render() {
    var headingStyle = {
      backgroundColor: 'FloralWhite',
      fontSize: '19px'
    }
    return <th style={headingStyle}>{this.props.heading}</th>
  }
}

class Row extends Component {
  render() {
    var trStyle = {
      backgroundColor: 'aliceblue'
    }
    return <tr style={trStyle}>
      <td>{this.props.changeSet.when}</td>
      <td>{this.props.changeSet.who}</td>
      <td>{this.props.changeSet.description}</td>
    </tr>;
  }
}

class Headings extends Component{
  render() {
    var headings = this.props.headings.map((heading, i) => {
      return (<Heading heading={heading} key={i}/> )
    });

    return <thead><tr>{headings}</tr></thead>
  }
}

class Rows extends Component {
  render() {
    var rows = this.props.changeSets.map((changeSet, i)=>{
      return (<Row key={i} changeSet={changeSet}/>)
    });
    return (<tbody>{rows}</tbody>);
  }
}

class App extends React.Component {
  render() {
    const headings = this.props.headings.map((heading, i)=> {
      return(<th key={i}>{heading}</th>)
    });

    const title = this.props.title;

    return (<div>
      {/* Comentario */}
      <h1>{title}</h1>
      <table className="recentChangesTable">
        <Headings headings={this.props.headings}/>
        <Rows changeSets={this.props.data}/>
      </table>
    </div>);
  }
}

var data = [{ "when": "2 minutes ago",
"who": "Jill Dupre",
"description": "Created new account"
},
{
"when": "1 hour ago",
"who": "Lose White",
"description": "Added fist chapter"
},
{
"when": "2 hours ago",
"who": "Jordan Whash",
"description": "Created new account"
}];

var propiedades = {
  title: "Cambios Recientes",
  headings: ['Who','When','description'],
  data: data
}

render(<App
  /*
  linea de multiples comentarios
  */
  {...propiedades} headings = {['Updated at ', 'Author', 'Change']}/>
  , document.getElementById('app'));
