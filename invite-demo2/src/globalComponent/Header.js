// Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <a className="header--logo" href="#0">
            {/* <img src="assets/img/logo.png" alt="Global" /> */}
            <p>Global</p>
          </a>
          <button className="header--cta cta">Hire Us</button>
          <div className="header--nav-toggle">
            <span></span>
          </div>
    </header>
  );
}

export default Header;
