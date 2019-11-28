import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About'
import Login from './Login'


ReactDOM.render((
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={()=><h1>Home Page</h1>}/>
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    </div>
  </Router>
),
  document.getElementById('root')
);
