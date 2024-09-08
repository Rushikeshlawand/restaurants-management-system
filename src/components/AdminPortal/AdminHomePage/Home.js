import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Import AdminNavbar
import './Home.css'; // Ensure you have the corresponding CSS file for styling

const AdminSettingsForm = () => {
  const [formData, setFormData] = useState({
    instagram: '',
    facebook: '',
    twitter: '',
    phone: '',
    email: '',
    address: '',
    backgroundImg: '',
    logo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          [name]: reader.result
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="admin-settings-container">
      <AdminNavbar /> {/* Include AdminNavbar */}
      <div className="settings-form-card">
        <h2>Edit Customer Interface</h2>
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label htmlFor="instagram">Instagram Account:</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Instagram URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook Account:</label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="Facebook URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter Account:</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="Twitter URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="backgroundImg">Background Image:</label>
            <select
              id="backgroundImg"
              name="backgroundImg"
              onChange={handleChange}
              value={formData.backgroundImg}
            >
              <option value="">Select Image</option>
              <option value="homepage">Homepage</option>
              <option value="menu-card">Menu Card</option>
              <option value="my-order">My Order</option>
              <option value="testimonials">Testimonials</option>
              <option value="review">Review</option>
            </select>
            {formData.backgroundImg && <img src={formData.backgroundImg} alt="Background Preview" className="image-preview" />}
          </div>
          <div className="form-group">
            <label htmlFor="logo">Restaurant Logo:</label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleFileChange}
            />
            {formData.logo && <img src={formData.logo} alt="Logo Preview" className="image-preview" />}
          </div>
          <button type="submit" className="submit-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsForm;
