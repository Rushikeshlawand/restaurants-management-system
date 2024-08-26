import React from 'react';
import Navbar from '../components/Navbar';
import welcomeImage from '../assets/welcome.png'; // Adjust the path based on your directory structure
import '../styles/Home.css'; // Create or adjust this CSS file for styling

const Home = () => (
  <div className="home-container">
    <Navbar />
    <div className="welcome-content">
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
      <h1>Welcome to Our Restaurant</h1>
      <p>Please scan the QR code at your table to start ordering.</p>
    </div>
  </div>
);

export default Home;
