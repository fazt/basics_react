const React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>About component</h2>
//       </div>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This a weather app built in Reactjs.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>- This was
          the Javscript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
          Open Weather Map to Search for weather data by city name
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
