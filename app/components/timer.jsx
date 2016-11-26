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
            timerStatus: 'Timerstarted'
        });
        this.timer = setInterval(() => {
            timer = timer + 1;
            this.setState({
                time: timer
            });
        }, 1000);


    },renderButtons: function () {
        if (this.state.timerStatus === 'Timerstarted'){
            return <Controls Status={this.state.timerStatus} onReset={this.onReset}/>
        } else {return <button onClick={this.onStart} className="button primary hollow expanded">Start</button>}
    },
    render: function() {
        return (
            <div>
                <h1 className="text-center">Timer</h1>
                <Clock totalSeconds={this.state.time}/>
                <div className="row">
                    <div className="controls small-6 large-4 columns small-offset-3 large-offset-4">
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Timer;
