var Controls = React.createClass({
    propTypes: {
        Status: React.PropTypes.string.isRequired
    },
    renderbuttontext: function (){
            var countdownStatus = this.props.Status;
            switch (countdownStatus){
                case 'stopped':
                return(<button className="button primary expanded">Start</button>);
                break;
                case 'started':
                return(<button onClick={this.props.onPause} className="button secondary expanded">Pause</button>);
                break;
            }
        },
    render: function(){
        return (
            <div className="row">
            <div className="controls small-6 large-4 columns small-offset-3 large-offset-4">
                {this.renderbuttontext()}
                <button onClick={this.props.onReset} className="button expanded alert">Reset</button>
            </div>
            </div>
        );
    }
});

module.exports = Controls;
