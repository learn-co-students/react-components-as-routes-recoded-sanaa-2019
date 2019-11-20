import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return(  <div className="login">
        <form action="">
          <input type="text" name="username" id="username" />
          <label htmlFor="username">Username</label>
          <input type="text" name="passsword" id="passsword" />
          <label htmlFor="passsword">Passsword</label>
          <input type="submit" name="submit" id="submit" value="login" />
        </form>
      </div>
      )
    }
}
