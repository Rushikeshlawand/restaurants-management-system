import React from 'react';
import './Home.css';
import Navbar from '../../CustomerPortal/Navbar/Navbar';

const AdminHomePage = () => {
  return (
    <div className="admin-homepage-container">
      <Navbar />
      <div className="admin-homepage-card">
        <h2>Admin Homepage Settings</h2>
        
        <form className="admin-form">
          <label htmlFor="homepage-text">Homepage Text:</label>
          <textarea id="homepage-text" name="homepage-text" placeholder="Enter text for the homepage"></textarea>
          
          <label htmlFor="background-image">Upload Background Image:</label>
          <input type="file" id="background-image" name="background-image" accept="image/*" />
          
          <label htmlFor="logo-image">Upload Logo:</label>
          <input type="file" id="logo-image" name="logo-image" accept="image/*" />
          
          <label htmlFor="instagram">Instagram ID:</label>
          <input type="text" id="instagram" name="instagram" placeholder="Enter Instagram ID" />

          <label htmlFor="facebook">Facebook ID:</label>
          <input type="text" id="facebook" name="facebook" placeholder="Enter Facebook ID" />

          <label htmlFor="twitter">Twitter ID:</label>
          <input type="text" id="twitter" name="twitter" placeholder="Enter Twitter ID" />

          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" placeholder="Enter Phone Number" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" />

          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default AdminHomePage;
