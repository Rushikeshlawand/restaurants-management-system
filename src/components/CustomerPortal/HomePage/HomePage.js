import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../../../Images/maharaja.png';

const carouselImages = [
    require('../../../Images/carousel/carousel1.jpg').default,
    require('../../../Images/carousel/carousel2.jpg').default
];

const restaurantImages = [
    require('../../../Images/restaurant/restaurant1.jpg').default,
    require('../../../Images/restaurant/restaurant2.jpg').default
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
            <Footer />
        </div>
    );
};

export default HomePage;
