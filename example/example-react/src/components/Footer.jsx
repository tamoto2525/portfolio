import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/footer.scss'; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer className="l-footer">
      <Link to="/" className="logo">
        Site Name
      </Link>
      <div className="navigation">
        <div className="topic">
          <p className="topic-name">Topic</p>
          <ul>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
          </ul>
        </div>
        <div className="topic">
          <p className="topic-name">Topic</p>
          <ul>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
          </ul>
        </div>
        <div className="topic">
          <p className="topic-name">Topic</p>
          <ul>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Page</Link></li>
          </ul>
        </div>
      </div>
      <div className="sns">
        <ul>
          <li><Link to="/" target="_blank">FaceBook</Link></li>
          <li><Link to="/" target="_blank">LinkedIn</Link></li>
          <li><Link to="/" target="_blank">YouTube</Link></li>
          <li><Link to="/" target="_blank">Instagram</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;