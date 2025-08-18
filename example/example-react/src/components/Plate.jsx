// src/components/Plate.jsx
import React from 'react';
import '../assets/css/components/plate.scss'; // Assuming you have a CSS file for styling

function Plate({ title, icons, name, description }) {
  return (
    <div className="m-plate">
      {title && <h2 className="m-plate-title">{title}</h2>}
      <div className="m-plate-users">
        {icons && <img src={icons} alt={name} className="m-plate-icons" />}
        <div className="m-plate-info">
          {name && <p className="m-plate-name">{name}</p>}
          {description && <p className="m-plate-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default Plate;