// IntroSection.jsx
import React from 'react';

const IntroSection = () => {
  return (
    <li className="l-section section section--is-active">
      <div className="intro">

        <div className="intro--banner">
          <h1>Your next<br />interactive<br />experience</h1>
          <button className="cta">
            Hire Us
            
            <span className="btn-background"></span>
          </button>
          <img src="assets/img/introduction-visual.png" alt="" />
        </div>

        <div className="intro--options">
          <a href="#0">
            <h3>Metiew &amp; Smith</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
          </a>
          <a href="#0">
            <h3>Fantasy interactive</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
          </a>
          <a href="#0">
            <h3>Paul &amp; shark</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
          </a>
        </div>

      </div>
    </li>
  );
};

export default IntroSection;
