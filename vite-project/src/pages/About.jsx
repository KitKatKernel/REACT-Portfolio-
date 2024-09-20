import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img src="https://via.placeholder.com/150" alt="James Ryan IV" className="about-image" />
        <p className="about-text">
          Hello! I'm James Ryan IV, a dedicated bootcamp student with a goal of becoming a junior web developer. 
          I'm currently focused on learning the MERN stack and building my skills to create dynamic, user-friendly applications. 
          When I'm not studying or coding, I enjoy diving into books and cooking.
        </p>
      </div>
    </div>
  );
}

export default About;
