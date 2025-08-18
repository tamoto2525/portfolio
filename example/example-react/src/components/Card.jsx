// src/components/Card.jsx
import React from 'react';
import '../assets/css/components/card.scss'; // Assuming you have a CSS file for styling

function Card({ title, description, imageUrl, price }) {
  return (
    <div className="m-card">
      {imageUrl && <img src={imageUrl} alt={title} className="m-card-image" />}
      {title && <h2 className="m-card-title">{title}</h2>}
      {description && <p className="m-card-description">{description}</p>}
      {price && <p className="m-card-price">{price}</p>}
      {/* 他にもボタンやリンクなどを追加できます */}
    </div>
  );
}

export default Card;