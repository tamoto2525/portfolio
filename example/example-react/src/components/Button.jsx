import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/components/button.scss'; // Assuming you have a CSS file for styling
function Button({ cancel,text}) {
  const className = cancel ? 'm-button -cancel' : 'm-button';
  const Text = text ? text : 'Button';
  return (
    <div className={className}>
      <Link to="/">{Text}</Link>
    </div>
  );
}

export default Button