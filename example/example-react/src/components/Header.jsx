import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'

import '../assets/css/header.scss'; // Assuming you have a CSS file for styling
function Header() {
  return (
  <header className="l-header">
    <Link to="/" className="logo">
      Site Name
    </Link>
    <nav className="l-nav">
      <ul className="l-nav-links">
        <li>
          <Link to="/">Page1</Link>
        </li>
        <li>
          <Link to="/about">Page2</Link>
        </li>
        <li>
          <Link to="/article">Page3</Link>
        </li>
        <li>
          <Link to="/shop">Page4</Link>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header