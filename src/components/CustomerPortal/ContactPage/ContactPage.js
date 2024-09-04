import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setReviewSubmitted(true);
    };

    return (
        <div className="contact-page">
            <div className="left-section">
                <h1>Thank You for Visiting Us! <span role="img" aria-label="hand-wave">👋</span></h1>
                <p>
                    <span className="icon">📍</span> 123 Main Street, Pune, Maharashtra, India, 411001<br />
                    <span className="icon">📞</span> +91-123-456-7890<br />
                    <span className="icon">📧</span> info@restaurant.com<br />
                    <span className="icon">📸</span> <a href="https://instagram.com/restaurant" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                    <span className="icon">📘</span> <a href="https://facebook.com/restaurant" target="_blank" rel="noopener noreferrer">Facebook</a><br />
                    <span className="icon">▶️</span> <a href="https://youtube.com/restaurant" target="_blank" rel="noopener noreferrer">YouTube</a>
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

                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </div>

            {reviewSubmitted && (
                <div className="popup">
                    <p>Thank you for your review. Visit again!</p>
                </div>
            )}

            <div className="footer">
                <p>📍 123 Main Street, Pune, Maharashtra, India, 411001</p>
            </div>
        </div>
    );
};

export default ContactPage;
