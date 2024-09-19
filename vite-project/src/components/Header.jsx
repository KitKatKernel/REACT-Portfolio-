import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // TODO Need to create this file next

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">James Ryan IV</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">About Me</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/resume" className="nav-link">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;