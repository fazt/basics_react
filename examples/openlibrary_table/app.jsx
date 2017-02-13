import React from 'react';
import {render} from 'react-dom';

var Heading = React.createClass({
  render: function() {
    let HeadingStyle = {
        backgroundColor: 'FloralWhite'
      , fontSize: '19px'
    };
    return(<th style={HeadingStyle}>{this.props.heading}</th>);
  }
});

var Headings = React.createClass({
  render: function(){
    var headings = this.props.headings.map(function(heading, i) {
      return(
        <Heading key={i} heading={heading}/>
      );
    });
    return(
      <thead>
        <tr>{headings}</tr>
      </thead>
    )
  }
});

var Row = React.createClass({
  render: function() {
    let rowStyle = {backgroundColor: 'aliceBlue'};
    return(
      <tr style={rowStyle}>
        <td>{this.props.changeSet.when}</td>
        <td>{this.props.changeSet.who}</td>
        <td>{this.props.changeSet.description}</td>
      </tr>
    )
  }
});

var Rows = React.createClass({
  render: function () {
    var rows = this.props.changeSets.map((changeSet, i)=>{
      return (
        <Row key={i} changeSet={changeSet}/>
      );
    });
    return(
      <tbody>
        {rows}
      </tbody>
    )
  }
});

var RecentChangesTable = React.createClass({
  render: function () {
    return(
      <div>
        <h1 className='text-center text-uppercase'>{this.props.title}</h1>
        <table className='table'>
          {this.props.children}
        </table>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      changeSets: []
    }
  },
  getDefaultProps: function () {
    return {
        title: 'Default Title'
      , headings: ['When happened ', 'Who did it', 'What they change']
    }
  },
  propTypes: {
      headings: React.PropTypes.array
    , changeSets: React.PropTypes.array
    , author: React.PropTypes.string.isRequired
    , headings: function (props, propName, componentName) {
      if (propName === 'headings') {
        console.log('good name for headings :)');
        return;
      }
    }
  },
  render: function () {
    return (
      <div>
        {/*this is a comment*/}
        <RecentChangesTable title={this.props.title}>
          <Headings headings={this.props.headings}/>
          <Rows changeSets={this.state.changeSets}/>
        </RecentChangesTable>
      </div>
    )
  }
});
const headings = ['WHEN', 'Who', 'Description'];
const data = [
  {
    "when": "2 minutes ago",
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

var props = {
      headings: headings
    , changeSets: data.length>0 ? data: ''
    , title: 'Recent Changes'
}
render(
  <App
    /*muti line lien comment here*/
  {...props}
  headings = {['Updated at ', 'Author','Change']}
  />
  ,document.getElementById('app')
);
