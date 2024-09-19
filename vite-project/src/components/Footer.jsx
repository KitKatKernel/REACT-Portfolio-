import React from 'react';
import './Footer.css'; // TODO need to create this file next too.

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/KitKatKernel" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
      <a href="https://www.linkedin.com/in/james-ryan-iv-493bb0308/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
      <a href="mailto:Natecrunchyroll@gmail.com" className="footer-link">Email</a>
    </footer>
  );
}

export default Footer;