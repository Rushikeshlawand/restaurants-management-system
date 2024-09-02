import React from 'react';
import '../../CustomerPortal/Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                {/* Replace with your restaurant logo */}
                <span>Restaurant Adress: Karvenagar, Pune, Maharashtra.</span>
            </div>
            <div className="footer-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
                </a>
                <a href="#location" className="footer-icon-link">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                </a>
                <a href="#address" className="footer-icon-link">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                </a>
                <a href="tel:+1234567890" className="footer-icon-link">
                    <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                </a>
                <a href="mailto:info@restaurant.com" className="footer-icon-link">
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                </a>
            </div>
            <div className="footer-whatsapp">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                    Chat with us on WhatsApp
                </a>
            </div>
        </footer>
    );
};

export default Footer;
