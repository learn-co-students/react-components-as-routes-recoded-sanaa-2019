import React from "react";
import ReactDOM from "react-dom";
import About from './About'
import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";




ReactDOM.render(
  <Router>
    <div className="">
      <NavBar />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
