import React from 'react';
import '../../CustomerPortal/HomePage/HomePage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../assets/logo.png';

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
            <Footer /> {/* Add the Footer component */}
        </div>
    );
};

export default HomePage;
