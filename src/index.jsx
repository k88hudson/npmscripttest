var React = require('react');

var things = ['puppies', 'kittens', 'ice cream'];

var App = React.createClass({
  render: function () {
    return (<div>
      <p>My favourite things are:</p>
      <ul>
        {things.map(thing => <li key={thing}>{thing}</li>)}
      </ul>
    </div>);
  }
});

React.render(<App />, document.getElementById('app'));
