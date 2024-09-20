import React from 'react';
import './Portfolio.css';
import project1Image from '../assets/images/project1.png';

const projects = [
  {
    id: 1,
    title: 'Mighty Movie Matching Machine',
    description: 'Meet your perfect match',
    image: project1Image,
    repo: 'https://github.com/KitKatKernel/mighty-movie-matching-machine',
    demo: 'https://kitkatkernel.github.io/mighty-movie-matching-machine/'
  },
  // TODO: Fix up Project 2, and come back and add Project 3 after bootcamp is completed.
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">Repository</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Live Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;