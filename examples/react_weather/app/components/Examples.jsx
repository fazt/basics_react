const React = require('react');
let { Link } = require('react-router');

let Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locaton to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, BR</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
