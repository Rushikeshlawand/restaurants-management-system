import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Corrected import path

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu Card</Link>
            <Link to="/myorder">My Order</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
