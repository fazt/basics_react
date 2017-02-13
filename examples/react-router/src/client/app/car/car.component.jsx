import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }
  render() {
    const cars = this.props.route.data;

    const CarNode = cars.map((car) => {
      return(<Link
        to={"/cars/"+car.id}
        className="list-group-item"
        key={car.id}>
        {car.name}
      </Link>);
      });

    return (<div>
      <h1>Cars Page</h1>
      <div className="list-group">
        {CarNode}
      </div>
    </div>
          )
          }
          }

          export default Car;
