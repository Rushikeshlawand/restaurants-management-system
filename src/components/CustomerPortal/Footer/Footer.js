import React from 'react';
import '../../CustomerPortal/Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                </a>
                <a href="tel:+1234567890" className="footer-icon-link">
                    <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                </a>
                <a href="mailto:info@restaurant.com" className="footer-icon-link">
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
