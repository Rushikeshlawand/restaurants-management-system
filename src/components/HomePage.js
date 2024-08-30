import React from 'react';
import Navbar from './Navbar';
import '../styles/HomePage.css';

// Adjust paths to point to the correct directories
import logo from '../assets/images/logo.png';
import whatsapp from '../assets/images/whatsapp.png';

// Import images from specific folders
const carouselImages = [
    require('../assets/images/carousel/carousel1.jpg').default,
    require('../assets/images/carousel/carousel2.jpg').default
];

const restaurantImages = [
    require('../assets/images/restaurant/restaurant1.jpg').default,
    require('../assets/images/restaurant/restaurant2.jpg').default
];

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <img src={logo} alt="Restaurant Logo" className="logo" />
                <Navbar />
            </header>
            <section className="carousel">
                {carouselImages.map((image, index) => (
                    <img src={image} alt={`Carousel ${index}`} key={index} className="carousel-image" />
                ))}
            </section>
            <section className="info">
                <div className="restaurant-images">
                    {restaurantImages.map((image, index) => (
                        <img src={image} alt={`Restaurant ${index}`} key={index} className="restaurant-image" />
                    ))}
                </div>
                <div className="about-info">
                    <h2>About Our Restaurant</h2>
                    <p>Welcome to our restaurant! We serve delicious food with a variety of options. Our team is dedicated to providing you with the best dining experience.</p>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-logo">
                    <img src={logo} alt="Restaurant Logo" />
                </div>
                <div className="footer-links">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#location">Location</a>
                    <a href="#address">Address</a>
                    <a href="tel:+1234567890">Phone Number</a>
                    <a href="mailto:info@restaurant.com">Email</a>
                </div>
                <div className="footer-whatsapp">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp" className="whatsapp-logo" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
