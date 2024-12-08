import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/login', { email, password });
  //     console.log(response.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }

  return (
    <div className="container">
      <h2>Login</h2>
      <form  action='/home'>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='login-btn' type="submit" onClick={() => navigate('/')}>Login</button><br/>
        
        <button className='register-btn' type="submit" onClick={() => navigate('/register')}>register</button>

      </form>
    </div>
);
};

export default Login;

