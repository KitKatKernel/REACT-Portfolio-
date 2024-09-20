import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-custom mt-8">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center border border-custom-border rounded">
        <a href="https://github.com/YourGitHub" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
        <a href="https://linkedin.com/in/YourLinkedIn" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>
        <a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer" className="mx-2">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;