import React from 'react';
import {Link} from 'react-router-dom';

function Signup() {


  return (
    <div className="signup-form">
      <div className="container">
        <div className="header">
          <h1>Create an Account</h1>
        </div>
        <form>
          <div className="input">
            <input type="text"   placeholder="Name" />
          </div>
          <div className="input">
            <input type="email"   placeholder="Email" />
          </div>
          <div className="input">
            <input type="password"  placeholder="Password" />
          </div>
          <div className="input">
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