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
    <div className="settings-form-container">
      <AdminNavbar /> {/* Include AdminNavbar */}
      <div className="form-content">
        <h2> Edit Customer Interface</h2>
        <form onSubmit={handleSubmit} className="settings-form">
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="instagram">Instagram (Maharaja Restaurant):</label></td>
                <td><input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Instagram URL"
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="facebook">Facebook (Maharaja Restaurant):</label></td>
                <td><input
                  type="text"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Facebook URL"
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="twitter">Twitter (Maharaja Restaurant):</label></td>
                <td><input
                  type="text"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="Twitter URL"
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="phone">Phone Number:</label></td>
                <td><input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email:</label></td>
                <td><input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="backgroundImg">Background Image:</label></td>
                <td>
                  <input
                    type="file"
                    id="backgroundImg"
                    name="backgroundImg"
                    onChange={handleFileChange}
                  />
                  {formData.backgroundImg && <img src={formData.backgroundImg} alt="Background Preview" className="image-preview" />}
                </td>
              </tr>
              <tr>
                <td><label htmlFor="logo">Logo:</label></td>
                <td>
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    onChange={handleFileChange}
                  />
                  {formData.logo && <img src={formData.logo} alt="Logo Preview" className="image-preview" />}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" className="submit-button">Save Changes</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsForm;
