// AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <li className="l-section section">
      <div className="about">
        <div className="about--banner">
          <h2>We<br />believe in<br />passionate<br />people</h2>
          <a href="#0">
            Career
            <span>
              
              
            </span>
          </a>
          <img src="assets/img/about-visual.png" alt="About Us" />
        </div>
        <div className="about--options">
          <a href="#0">
            <h3>Winners</h3>
          </a>
          <a href="#0">
            <h3>Philosophy</h3>
          </a>
          <a href="#0">
            <h3>History</h3>
          </a>
        </div>
      </div>
    </li>
  );
};

export default AboutSection;
