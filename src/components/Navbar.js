import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#menu">Menu Card</a>
            <a href="#orders">My Order</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;
