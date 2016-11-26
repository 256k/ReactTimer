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
        if (this.state.countdownStatus === 'paused'){
            this.setState({
                countdownStatus: 'started'
            });
        } else if (this.state.countdownStatus === 'started'){
            this.setState({
                countdownStatus: 'paused'
            });
        }


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
                    case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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
    buttonrender: function(){
        if (this.state.countdownStatus === 'started'){
        return   <Controls onReset={this.onReset} onPause= {this.onPause} Status={this.state.countdownStatus}/>
    } else if (this.state.countdownStatus === 'paused'){
    return   <Controls onReset={this.onReset} onPause= {this.onPause} Status={this.state.countdownStatus}/>
} else if (this.state.countdownStatus === 'stopped'){
return <CountdownForm onSearch={this.setTime}/>
}

},
    render: function(){
        return (
            <div>
                <h1 className="title">Countdown Timer</h1>
                <Clock totalSeconds={this.state.time}/>
                <div className="row">
                    <div className="small-6 large-4 columns small-offset-3 large-offset-4">
                {this.buttonrender()}
            </div>
            </div>



            </div>
        )
    }
})

module.exports = Countdown;
