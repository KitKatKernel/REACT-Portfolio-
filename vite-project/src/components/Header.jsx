import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    if (isNavVisible && navRef.current) {
      // Dynamically set height based on the content
      navRef.current.style.height = `${navRef.current.scrollHeight}px`;
    } else if (navRef.current) {
      // Hide the menu by setting the height to 0
      navRef.current.style.height = '0';
    }
  }, [isNavVisible]);

  return (
    <header className="header">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center border border-custom-border rounded">
        <h1 className="text-3xl font-bold text-primary">James Ryan IV</h1>
        <button className="nav-toggle md:hidden" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </button>
        <nav
          ref={navRef}
          className={`header-nav md:flex ${isNavVisible ? 'show' : ''}`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="/" className="nav-link hover:text-primary-dark transition duration-300" onClick={toggleNav}>About Me</Link></li>
            <li><Link to="/portfolio" className="nav-link hover:text-primary-dark transition duration-300" onClick={toggleNav}>Portfolio</Link></li>
            <li><Link to="/contact" className="nav-link hover:text-primary-dark transition duration-300" onClick={toggleNav}>Contact</Link></li>
            <li><Link to="/resume" className="nav-link hover:text-primary-dark transition duration-300" onClick={toggleNav}>Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
