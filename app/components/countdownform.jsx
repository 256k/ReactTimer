var CountdownForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        var time = this.refs.time.value;
        if (time.match(/^[0-9]+$/)) {
            this.refs.time.value = "";
            this.props.onSearch(parseInt(time, 10));
        } else {
            alert("Please enter a valid number");
            this.refs.time.value = "";
        }
    },
    render : function() {
        return (
            <div className="row">
                <div className="small-6 large-4 columns small-offset-3 large-offset-4">
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" ref="time" placeholder="enter total amount of seconds here"/>
                        <button className="expanded hollow button">Start</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = CountdownForm;
