import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Experience the Taste of Luxury</h1>
                <p className="hero-subtitle">
                    Fine dining in the heart of the city. Discover our exquisite menu and exceptional service.
                </p>
                <div className="hero-actions">
                    <Button size="lg" onClick={() => window.location.href = '#menu'}>View Menu</Button>
                    <Button size="lg" variant="outline" onClick={() => window.location.href = '#book'}>Book a Table</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
