// import axios from 'axios';
// import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { authAtom } from '../../store';
import './Login.css';

const SideImage = () => {
  return (
    <div className="side_image">
      <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" />
    </div>
  );
};

const LoginForm = () => {
  // const [, setAuth] = useAtom(authAtom);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  
  // const handleAuthentication = async (e) => {
  //   e.preventDefault();
  //   // setAuth({username})
  //   try {
  //     const resp = await axios.get(
  //       `http://localhost:5000/api/user/${username}/${password}`
  //     );
  //     if(resp.data.error || !resp.data.status) {
  //       alert("Invalid credential!")
  //       return
  //     }
  //     setAuth({username})
  //     window.localStorage.setItem('user', JSON.stringify({username}))
  //   } catch (error) {
  //     alert(error)
  //     console.log(error)
  //   }
  // };
  return (
    <div className="login-wrapper">
      <h1>WELCOME BACK!</h1>
      <form
        onSubmit={(e) => {
          handleAuthentication(e);
        }}
      >
        <div className="form-group">
          <label htmlFor='username'>Username</label><br/>
          <input
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label><br/>
          <input
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group-check">
          <input id="checkbox" type="checkbox" name="remember" /> Remember me ?
        </div>
        <div className="form-button">
          <button>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
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
