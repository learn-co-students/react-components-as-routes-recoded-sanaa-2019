import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="">
              <NavLink to="/" style={link} exact>
                Home
              </NavLink>
              <NavLink to="/login" style={link}>
                Login
              </NavLink>
              <NavLink to="/about" style={link}>
                About
              </NavLink>
            </div>
          );
    }
}
const link = {
    width: "100px",
    padding: "12px",
    margin: "0 10px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  };
  