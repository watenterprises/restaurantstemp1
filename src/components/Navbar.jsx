import React, { useState } from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="navbar-logo">
                    LuxeDining
                </a>

                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
                    <li><a href="#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
                    <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>

                <div className="navbar-actions">
                    <Button size="sm">Book a Table</Button>
                </div>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
