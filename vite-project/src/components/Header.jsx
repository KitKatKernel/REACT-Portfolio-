import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">James Ryan IV</h1>
        <nav className="header-nav">
          <Link to="/" className="nav-link">About Me</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;