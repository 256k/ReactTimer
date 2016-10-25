var Nav = require('nav');
var Timer = require('timer');

var Main = (props) => {
  return (
        <div>
            <Nav/>
            {props.children}
        </div>
  );
}

module.exports = Main;
