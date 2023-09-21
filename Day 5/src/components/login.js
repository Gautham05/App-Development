import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "../login.css";
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';


function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
});

const navigate = useNavigate();
const dispatch = useDispatch();

const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  dispatch(login(loginData.username));
  console.log(loginData);
  navigate('/dashboard');
};


  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>LOGIN</h1>
            <p>Enter Credentials For Login</p>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="input">
              <input required type="text"  placeholder="Username" name='username' onChange={handleLoginChange}/>
            </div>
            <div className="input">
              <input required type="password"  placeholder="Password" name='password' onChange={handleLoginChange}/>
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
