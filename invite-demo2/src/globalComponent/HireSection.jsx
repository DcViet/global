// HireSection.jsx
import React from 'react';

const HireSection = () => {
  return (
    <li className="l-section section">
      <div className="hire">
        <h2>You want us to do</h2>
        <form className="work-request">
          <div className="work-request--options">
            <span className="options-a">
              <input id="opt-1" type="checkbox" value="app design" />
              <label htmlFor="opt-1">
                
                App Design
              </label>
              <input id="opt-2" type="checkbox" value="graphic design" />
              <label htmlFor="opt-2">
                
                Graphic Design
              </label>
              <input id="opt-3" type="checkbox" value="motion design" />
              <label htmlFor="opt-3">
                
                Motion Design
              </label>
            </span>
            <span className="options-b">
              <input id="opt-4" type="checkbox" value="ux design" />
              <label htmlFor="opt-4">
                
                UX Design
              </label>
              <input id="opt-5" type="checkbox" value="webdesign" />
              <label htmlFor="opt-5">
                
                Webdesign
              </label>
              <input id="opt-6" type="checkbox" value="marketing" />
              <label htmlFor="opt-6">
                
                Marketing
              </label>
            </span>
          </div>
          <div className="work-request--information">
            <div className="information-name">
              <input id="name" type="text" spellCheck="false" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="information-email">
              <input id="email" type="email" spellCheck="false" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <input type="submit" value="Send Request" />
        </form>
      </div>
    </li>
  );
};

export default HireSection;
