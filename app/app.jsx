var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('main');
var Timer = require('timer');
var Countdown = require('countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
