import React from 'react';
import './Card.css';

const Card = ({ image, title, description, price, footer }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    {price && <span className="card-price">{price}</span>}
                </div>
                <p className="card-description">{description}</p>
                {footer && <div className="card-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default Card;
