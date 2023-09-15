import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {


  return (
    <div className="signup-form">
      <div className="container">
        <div className="header">
          <h1>Create an Account</h1>
        </div>
        <form>
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input type="text"   placeholder="Name" />
          </div>
          <div className="input">
            <i className="fa-solid fa-envelope"></i>
            <input type="email"   placeholder="Email" />
          </div>
          <div className="input">
            <i className="fa-solid fa-lock"></i>
            <input type="password"  placeholder="Password" />
          </div>
          <div className="input">
            <i className="fa-solid fa-lock"></i>
            <input type="password"   placeholder="Confirm Password" />
          </div>
          <input className="signup-btn" type="submit" value="SIGN UP" />
        </form>
        <Link to="/">
          <p>Already have an account? Sign in</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
