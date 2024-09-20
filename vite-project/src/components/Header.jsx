import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-custom fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center border border-custom-border rounded">
        <h1 className="text-3xl font-bold text-primary mb-4 md:mb-0">James Ryan IV</h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="/" className="hover:text-primary-dark transition duration-300">About Me</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary-dark transition duration-300">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-primary-dark transition duration-300">Contact</Link></li>
            <li><Link to="/resume" className="hover:text-primary-dark transition duration-300">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;