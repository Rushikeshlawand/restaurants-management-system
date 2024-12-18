import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faShoppingCart, faStar, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../Images/Navbar/logo.png'; // Update the logo import path
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Restaurant Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <Link to="/"><FontAwesomeIcon icon={faHome} className="navbar-icon" /> <b>Home</b></Link>
        <Link to="/menu"><FontAwesomeIcon icon={faBars} className="navbar-icon" /> <b>Menu Card</b></Link>
        <Link to="/myorder"><FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" /> <b>My Order</b></Link>
        <Link to="/testimonials"><FontAwesomeIcon icon={faStar} className="navbar-icon" /> <b>Testimonials</b></Link>
        <Link to="/contact"><FontAwesomeIcon icon={faPhone} className="navbar-icon" /> <b>Contact</b></Link>
      </div>
    </nav>
  );
};

export default Navbar;
