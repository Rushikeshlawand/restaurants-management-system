import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import maharaja from '../../../Images/maharaja.png'; // Ensure the correct path to the image

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name && email && phone) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      navigate('/home'); // Navigate to HomePage after successful signup
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="signup-page">
      <img src={maharaja} alt="Sign Up" className="signup-image" />
      <div className="signup-card">
        <h1>Sign Up to Maharaja Restaurant</h1>
        <div className="signup-info">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />

          

          <label htmlFor="phone">Enter your phone number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
          />

<label htmlFor="email">Enter your Password:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Password"
          />

          <button onClick={handleSignUp} className="sign-up-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
