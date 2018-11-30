
import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory} from 'react-router'
import Home from './Home.js';
import About from './About.js';
import Login from './Login.js';
import Root from './Root.js';

class App extends Component {
 render() {
   return(
     <Router history={browserHistory}>
      <Route path={'/'} component={Root}>
      <Route path={'home'} component={Home}></Route>
      <Route path={'login'} component={Login}></Route>
      <Route path={'about'} component={About}></Route>
      </Route>
      
     </Router>
   )
 }
}

export default App;
