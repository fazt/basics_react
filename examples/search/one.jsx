import React, { Component } from 'react';
import {render} from 'react-dom';

var FilteredList = React.createClass({
  getInitialState: function () {
    return {
      initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
    }
  },
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.FilterList}/>
        <List items={this.state.items}/>
      </div>
    );
  },
  FilterList: function (event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item
              .toLowerCase()
              .search(
                event.target.value.toLowerCase()
              ) !== -1
      ;
    });
    this.setState({items: updatedList});
  },
  componentWillMount: function () {
    this.setState({items: this.state.initialItems})
  }
});

var List = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.items.map(function (item, index) {
             return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
});


render(
  <FilteredList/>,
  document.getElementById('app')
)
