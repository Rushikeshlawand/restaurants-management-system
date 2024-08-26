import React, { useState } from 'react';
import welcomeImage from '../assets/welcome.png'; // Adjust the path based on your directory structure
import startOrderIcon from '../assets/start-order-icon.png'; // Adjust the path based on your directory structure
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleStartOrder = () => {
    // You can handle the submission logic here or just log the inputs for now
    console.log('Customer Name:', name);
    console.log('Mobile Number:', mobile);
    // Further logic to start order can be added here
  };

  return (
    <div className="welcome-page">
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
      <h1>Welcome to MAHARAJA HOTEL</h1>
      <p>We are delighted to have you with us. Enjoy your dining experience!</p>
      <p>Your table number is 1</p>

      <div className="customer-info">
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <label htmlFor="mobile">Enter your mobile number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Your Mobile Number"
        />
        <br />
        <button onClick={handleStartOrder} className="start-order-button">
          <img src={startOrderIcon} alt="Start Order" className="start-order-icon" />
          Start Your Order
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
