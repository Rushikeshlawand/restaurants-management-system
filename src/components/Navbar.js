import React from 'react';
import '../styles/Navbar.css'; // Add styling here

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu-card">Menu Card</a></li>
                <li><a href="#my-order">My Order</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
