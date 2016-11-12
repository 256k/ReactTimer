var CountdownForm = require("countdownform");


var Countdown = React.createClass({
    getInitialState: function (){
        return {
            time: 0
        }
    },
    decrease: function(time){
        var mytime = time;
        if (mytime > 0){
            mytime = time - 1;
            console.log(mytime);
            this.setTime(mytime);

        }

    },
    setTime: function(time){
        this.setState({
            time: time
        });
        setTimeout(() => {this.decrease(time)}, 1000);



    },
    render: function(){
        return (
            <div>
                <h1 className="title">Countdown Timer</h1>
                <Clock totalSeconds={this.state.time}/>
                <CountdownForm onSearch={this.setTime}/>
            </div>
        )
    }
})

module.exports = Countdown;
