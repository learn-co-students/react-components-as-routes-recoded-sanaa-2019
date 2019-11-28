import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        const link = {
            width:'100%',
            textDecoration:'none',
            padding:'10px 30px',
            margin:'30px auto',
            color:'white',
            fontWeight:'500',
            background:'green',
            cursor:'pointer'
          }
        return (
            <div>
    <NavLink to="/" exact style={link} activeStyle={{background:'darkblue'}} >Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background:'darkblue'}} >About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background:'darkblue'}} >Login</NavLink>
  </div>

          );
    }
}