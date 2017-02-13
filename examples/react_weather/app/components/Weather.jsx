const React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    // debugger;
    this.setState({isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function () {
    var { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return(<h3>Fetching Weather...</h3>);
      } else if(temp && location){
        return(
          <WeatherMessage
            location={location}
            temp={temp}/>
        );
      }
    }

    return (
      <div>
        <h2>WEATHER component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
