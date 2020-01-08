import React from 'react'
    import { NavLink } from 'react-router-dom';

    const link = {
      width: '50px',
      padding: '10px',
      margin: '0 5px 5px',
      background: 'black',
      textDecoration: 'none',
      color: 'white',
    }

    class Navbar extends React.Component {
      render() {
        return (
          <div>
            <NavLink
              to="/" exact style={link} activeStyle={{  background: 'grey'}}
            >Home</NavLink>
            <NavLink
              to="/about"
              exact
              style={link}
              activeStyle={{
                background: 'grey'
              }}
            >About</NavLink>
            <NavLink
              to="/login"
              exact
              style={link}
              activeStyle={{
                background: 'grey'
              }}
            >Login</NavLink>
          </div>
        )
      }
    }

    export default Navbar; 