var React = require('react');
var Clock = require('clock');

var Timer = React.createClass({
    render: function(){
        return (
            <div>
                <h1>This is the timer</h1>
                <Clock/>
            </div>
        );
    }
});

module.exports = Timer;
