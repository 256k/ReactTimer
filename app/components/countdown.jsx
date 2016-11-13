var CountdownForm = require("countdownform");


var Countdown = React.createClass({
    getInitialState: function (){
        return {
            time: 0,
            countdownStatus: 'stopped',
            button: 'Start'
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
                    this.setState({button: 'Stop'});
                    break;
                case 'stopped':
                    clearInterval(this.timer);
                    this.setState({button: 'Start'});
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
                <h1 className="title">Countdown Timer "{this.state.countdownStatus}"</h1>
                <Clock totalSeconds={this.state.time}/>
                <CountdownForm onSearch={this.setTime} button={this.state.button}/>
            </div>
        )
    }
})

module.exports = Countdown;
