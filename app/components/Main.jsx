var React = require('react');
var Nav = require('nav');

var Main = (props) => {
  return (
        <div>
            <Nav/>
            {props.children}
        </div>
  );
}

module.exports = Main;
