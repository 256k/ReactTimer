var Controls = require('controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            time: 0,
            timerStatus: 'stopped'
        }
    },
    onReset: function() {
        this.setState({
            time: 0,
            timerStatus: 'stopped'
        });
        clearInterval(this.timer);
    },
    onStart: function() {
        var timer = this.state.time
        this.setState({
            timerStatus: 'started'
        });
        this.timer = setInterval(() => {
            timer = timer + 1;
            this.setState({
                time: timer
            });
        }, 1000);


    },
    render: function() {
        return (
            <div>
                <h1 className="text-center">Timer</h1>
                <Clock totalSeconds={this.state.time}/>
                <div className="row">
                    <div className="small-6 columns small-offset-3">
                        {this.state.timerStatus === 'started' ? <Controls Status={this.state.timerStatus} onReset={this.onReset}/> : <button onClick={this.onStart} className="button primary expanded hollow ">Start</button> }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Timer;
