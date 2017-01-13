var React = require('react');
//var ReactDOM = require('react-dom');
import { render } from 'react-dom'
var routes = require('./config/routes.js');
var Main = require('./components/Main');
import { Router, Route, hashHistory } from 'react-router'

//ReactDOM.render(
//    <Main/>,
//  document.getElementById('app')
//    
//);
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>
), document.getElementById('app'))
