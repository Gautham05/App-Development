import React from 'react';
import {Link} from 'react-router-dom';
import "./login.css";

function Login() {
  

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>LOGIN</h1>
            <p>Enter Credentials For Login</p>
          </div>
          <form >
            <div className="input">
              <input type="text"  placeholder="Username" />
            </div>
            <div className="input">
              <input type="password"  placeholder="Password" />
            </div>
            <Link to="/register"> <input  className="signup-btn" type="submit" value="LOGIN" /></Link>
          </form>
          <Link to="/register"><p>New User? Signup Now to create an account!</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
