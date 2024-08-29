// src/components/SignupPage.js
import React, { useState } from 'react';
import signupImage from '../assets/signup.png'; // Adjust the path based on your directory structure
import '../styles/SignUpPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    // Add sign-up logic here
  };

  return (
    <div className="signup-page">
      <img src={signupImage} alt="Sign Up" className="signup-image" />
      <h1>Sign Up to MAHARAJA HOTEL</h1>
      <div className="signup-info">
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />

        <label htmlFor="phone">Enter your phone number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone Number"
        />
        <br />
        <button onClick={handleSignUp} className="sign-up-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
