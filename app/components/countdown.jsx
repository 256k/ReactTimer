var CountdownForm = require("countdownform");
var Controls = require('controls');


var Countdown = React.createClass({
    getInitialState: function (){
        return {
            time: 0,
            countdownStatus: 'stopped'
        }
    }, onReset: function(){
        this.setState({
            time: 0,
            countdownStatus: 'stopped'
        });
    },
    onPause: function(){
        this.setState({
            countdownStatus: 'stopped'
        });
    },
    startTimer: function(){
        this.timer = setInterval( () => {
            var newCount = this.state.time - 1;
            this.setState({
                time: newCount > 0 ? newCount : 0,
            });
            if (newCount === 0){
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);

    },
    componentDidUpdate: function(prevProps, prevState){
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case "started":
                    this.startTimer();
                    break;
                case 'stopped':
                    clearInterval(this.timer);
                    break;
            }
        }
    },
    setTime: function(time){
        this.setState({
            time: time,
            countdownStatus: 'started'
        });
    },
    render: function(){
        return (
            <div>
                <h1 className="title">Countdown Timer</h1>
                <Clock totalSeconds={this.state.time}/>
                {this.state.countdownStatus === 'started' ? <Controls onReset={this.onReset} onPause= {this.onPause} Status={this.state.countdownStatus}/> : <CountdownForm onSearch={this.setTime}/>}


            </div>
        )
    }
})

module.exports = Countdown;
