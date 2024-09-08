import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import maharaja from '../../Images/maharaja.png';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Added role state
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      // Redirect based on role
      if (role === "admin") {
        navigate("/admin-home"); // Navigate to AdminHomePage
      } else {
        navigate("/home"); // Navigate to HomePage for customers
      }
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
        <h2>Login to Maharaja Restaurant</h2>
        <div className="login-form">
          <label htmlFor="username">Phone Number:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your phone number"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>

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
