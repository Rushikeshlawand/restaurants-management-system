import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import maharaja from '../../Images/maharaja.png';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      navigate("/home"); // Navigate to HomePage after successful login
    } else {
      alert("Please enter both username and password");
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); // Navigate to SignupPage
  };

  return (
    <div className="login-page">
      <img src={maharaja} alt="Welcome" className="welcome-image" />
      <div className="login-card">
        <h2>Login to MAHARAJA HOTEL</h2>
        <div className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button onClick={handleLogin} className="login-button">
            Login
          </button>

          <button onClick={handleSignUp} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
