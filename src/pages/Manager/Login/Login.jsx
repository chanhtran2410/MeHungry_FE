import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const SideImage = () => {
  return (
    <div className="side_image">
      <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" />
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signinSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:1500/api/login`, {
        username,
        password,
      })
      .then((res) => {
        const token = res.data;
        localStorage.setItem(
          'user',
          JSON.stringify({
            access_token: token.accessToken,
            refresh_token: token.refreshToken,
          }),
        );
        navigate('/manager');
      })
      .catch((err) => {
        console.log({ err });
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div className="login-wrapper">
      <h1>WELCOME BACK!</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form method="post" onSubmit={signinSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input
            required
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group-check">
          <input id="checkbox" type="checkbox" name="remember" /> Remember me ?
        </div>
        <div className="form-button">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      navigate('/manager');
    }
  }, [navigate]);

  return (
    <div className="login_container">
      <div className="container">
        <SideImage />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
