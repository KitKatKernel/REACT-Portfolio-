import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">James F. Ryan IV</h1>
      
      <section className="contact-info">
        <p>Phone: 203-828-7550 | Email: Natecrunchyroll@gmail.com</p>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>A bootcamp graduate transitioning into web development, specializing in the MERN stack, TypeScript, and AWS, while pursuing freelance opportunities to gain more experience.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Web Development:</strong> JavaScript, React, Node.js, Express, MongoDB, SQL, TypeScript (beginner)</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Problem Solving:</strong> Strong ability to independently troubleshoot issues through research and problem-solving techniques.</li>
          <li><strong>Teamwork:</strong> Experience collaborating with team members to achieve shared goals.</li>
          <li><strong>Customer Service:</strong> Proven ability to manage and resolve customer issues with a focus on satisfaction.</li>
          <li><strong>Creative Solutions:</strong> Capable of thinking outside the box to develop innovative solutions.</li>
          <li><strong>Research Proficiency:</strong> Highly skilled at using online resources, such as Google, to find and implement technical solutions quickly.</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>Target</h3>
          <p><strong>Grocery Manager</strong> (2022-present)</p>
          <p><strong>Unload & Logistics Team</strong> (2017-2022)</p>
          <p><strong>General Merchandise Team</strong> (2014-2017)</p>
          <p>Responsibilities: Managed inventory, led teams in logistics and unloading, ensured smooth workflow in grocery management and general merchandise.</p>
        </div>
        <div className="job">
          <h3>Justin Ford Contractor (Graebel Van Lines)</h3>
          <p><strong>IT Specialist / Mover</strong> (2006-2010)</p>
          <p>Responsibilities: Oversaw and managed the disconnection and reconnection of computers during corporate moves, ensuring the setup was done properly. Additionally, worked as a mover, handling loading and unloading trailers, packing and unpacking household goods.</p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Seymour High School</strong> – Graduated 2006</li>
          <li><strong>Housatonic Valley College</strong> – Journalism (2010-2011, 2012-2013)</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;