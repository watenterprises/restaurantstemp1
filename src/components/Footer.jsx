import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>LuxeDining</h3>
                        <p>Experience the finest dining with an atmosphere of luxury and elegance.</p>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>123 Luxury Lane, Cityville</li>
                            <li>+1 (555) 123-4567</li>
                            <li>info@luxedining.com</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Opening Hours</h4>
                        <ul className="footer-contact">
                            <li>Mon - Fri: 11:00 AM - 10:00 PM</li>
                            <li>Sat - Sun: 10:00 AM - 11:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LuxeDining. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
