import React from 'react'; 
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import backgroundImage from '../../../Images/Homepage/HomepageBackground.jpg';
import orderFoodIcon from '../../../Images/Homepage/Orderfood.png'; // Import the image

const HomePage = () => { 
    return (
        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="header">
                <Navbar />
            </header>
            <div className="content">
                <h1>
                    YOU LOOK HUNGRY 😋
                    <br />
                    The Best Indian Food is here...
                </h1>
                <button className="order-now-button">
                    <img src={orderFoodIcon} alt="Order Food" className="order-icon" />
                    Order Now
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
