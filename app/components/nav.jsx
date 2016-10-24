var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                <li className="menu-text">
                    Timer.
                </li>
                <li>
                    <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                </li>
                <li>
                    <Link to="/" activeClassName="active-link">Countdown</Link>
                </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                <li className="menu-text">
                    <p>Created By <a href="http://www.256klabs.com" target="_blank">Fayek Helmi</a></p>
                </li>
                </ul>
            </div>
            </div>

        );
    }
});

module.exports = Nav;
