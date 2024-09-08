import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust path as needed
import Footer from '../Footer/Footer'; // Adjust path as needed
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setReviewSubmitted(true);
    };

    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-content">
                <div className="left-section">
                    <h1>Thank You for Visiting Us! <span role="img" aria-label="hand-wave">👋</span></h1>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Karve Nagar, Pune, Maharashtra, India, 411001<br />
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +91-7420939253<br />
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> maharaja@gmail.com<br />
                        <a href="https://instagram.com/restaurant" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />maharaja_restaurant</a>
                        <a href="https://facebook.com/restaurant" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />maharaja_restaurant</a>
                        <a href="https://youtube.com/restaurant" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="social-icon youtube" /> maharaja restaurant</a>
                    </p>
                </div>

                <div className="center-section">
                    <div className="form-card">
                        <h2>Leave a Review</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="dish">Best Dish You Liked:</label>
                            <input type="text" id="dish" name="dish" placeholder="Your Favorite Dish" required />

                            <label htmlFor="review">Review:</label>
                            <textarea id="review" name="review" placeholder="Your Review" required></textarea>

                            <label htmlFor="rating">Rating:</label>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span key={star} className="star">&#9733;</span>
                                ))}
                            </div>

                            <button type="submit">Submit Review</button>
                        </form>
                    </div>
                </div>

                {reviewSubmitted && (
                    <div className="popup">
                        <p>Thank you for your review. Visit again!</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
