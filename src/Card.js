import React from 'react';
import './Card.css';

function Card({ image, title, description, buttonLabel, onButtonClick , className }) {
  return (
    <div className={`card ${className}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonLabel && onButtonClick && (
        <button className="card-button" onClick={onButtonClick}>{buttonLabel}</button>
      )}
        </div>
    </div>
  );
}

export default Card;
