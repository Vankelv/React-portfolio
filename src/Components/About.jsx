import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm a frontend developer with expertise in HTML, CSS, JavaScript, and React JS. I'm also a brand identity designer and IT helpdesk support with over 3 years of experience in these roles.
        </p>
        <div className="skill-bars">
          <div className="skill-item">
            <span className="skill-title">WordPress</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '91%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-title">HTML and CSS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-title">React/JS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '55%' }}></div>
            </div>
          </div>
        </div>
        <div className="about-buttons">
          <a href="/path/to/your/cv" download>
            <button className="btn">
              <FaDownload /> Download CV
            </button>
          </a>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
