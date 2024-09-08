import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faUsers, faList, faChartBar } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../Images/Navbar/logo.png'; // Update the logo import path
import './AdminNavbar.css'; 

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-logo">
        <img src={logo} alt="Admin Logo" className="logo-image" />
      </div>
      <div className="admin-navbar-links">
        <Link to="/admin-home"><FontAwesomeIcon icon={faHome} className="admin-navbar-icon" /> <b>Dashboard</b></Link>
        <Link to="/admin/manage-menu"><FontAwesomeIcon icon={faList} className="admin-navbar-icon" /> <b>Manage Menu</b></Link>
        <Link to="/admin/manage-customers"><FontAwesomeIcon icon={faUsers} className="admin-navbar-icon" /> <b>Manage Customers</b></Link>
        <Link to="/admin/settings"><FontAwesomeIcon icon={faCog} className="admin-navbar-icon" /> <b>Settings</b></Link>
        <Link to="/admin/reports"><FontAwesomeIcon icon={faChartBar} className="admin-navbar-icon" /> <b>Reports</b></Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
