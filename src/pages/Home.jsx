import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import { menuItems, galleryImages } from '../data';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />

            <Hero />

            <section id="menu" className="section">
                <div className="container">
                    <h2 className="section-title">Our Menu</h2>
                    <div className="menu-grid">
                        {menuItems.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                footer={<Button variant="text" size="sm">Order Now</Button>}
                            />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <Button variant="outline">View Full Menu</Button>
                    </div>
                </div>
            </section>

            <section id="gallery" className="section" style={{ backgroundColor: 'var(--color-accent)' }}>
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <div className="gallery-grid">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chef cooking" />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title" style={{ left: 0, transform: 'none' }}>About Us</h2>
                            <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                Founded in 2010, LuxeDining has been serving the finest culinary experiences to our guests.
                                Our chefs use only the freshest, locally sourced ingredients to create dishes that are both
                                visually stunning and delicious.
                            </p>
                            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                                Whether you are celebrating a special occasion or just looking for a romantic dinner,
                                our warm and inviting atmosphere is the perfect setting.
                            </p>
                            <Button>Read More</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-light)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>Contact Us</h2>
                    <div className="contact-container">
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p style={{ opacity: 0.8, marginBottom: 'var(--spacing-lg)' }}>
                                We would love to hear from you. Please fill out the form or contact us directly.
                            </p>
                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <strong>Address:</strong><br />
                                123 Luxury Lane, Cityville, ST 12345
                            </div>
                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <strong>Phone:</strong><br />
                                +1 (555) 123-4567
                            </div>
                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <strong>Email:</strong><br />
                                info@luxedining.com
                            </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-input" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-input" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-textarea" placeholder="Your Message"></textarea>
                                </div>
                                <Button type="submit">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
