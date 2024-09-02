import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="left-section">
                <h1>Thank You for Visiting Us!</h1>
                <p>
                    Address: 123 Main Street, Pune, Maharashtra, India, 411001<br />
                    Phone: +91-123-456-7890<br />
                    Email: info@restaurant.com<br />
                    Instagram: <a href="https://instagram.com/restaurant" target="_blank" rel="noopener noreferrer">📸</a><br />
                    Facebook: <a href="https://facebook.com/restaurant" target="_blank" rel="noopener noreferrer">📘</a><br />
                    YouTube: <a href="https://youtube.com/restaurant" target="_blank" rel="noopener noreferrer">▶️</a>
                </p>
            </div>

            <div className="center-section">
                <div className="form-card">
                    <h2>Contact Us</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="right-section">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed/v1/place?q=Pune&key=YOUR_GOOGLE_MAPS_API_KEY"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;
