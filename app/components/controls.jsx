var Controls = React.createClass({
    propTypes: {
        Status: React.PropTypes.string.isRequired
    },
    renderbuttontext: function (){
            var countdownStatus = this.props.Status;
            switch (countdownStatus){
                case 'paused':
                return(<button onClick={this.props.onPause} className="button primary expanded">Continue</button>);
                break;
                case 'stopped':
                case 'started':
                return(<button onClick={this.props.onPause} className="button secondary expanded">Pause</button>);
                break;
                case 'Timerstarted':
                break;
            }
        },
    render: function(){
        return (

            <div className="controls ">
                {this.renderbuttontext()}
                <button onClick={this.props.onReset} className="button expanded alert">Stop</button>
            </div>
        
        );
    }
});

module.exports = Controls;
