import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
  

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Tickets New</h1>
            <p>Enter Credentials For Login</p>
          </div>
          <form >
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input type="text"  placeholder="Username" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password"  placeholder="Password" />
            </div>
            <input  className="signup-btn" type="submit" value="LOGIN" />
          </form>
          <Link to="/register"><p>New User? Signup Now to create an account!</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
