// WorkSection.jsx
import React from 'react';

const WorkSection = () => {
  return (
    <li className="l-section section">
      <div className="work">
        <h2>Selected work</h2>
        <div className="work--lockup">
          <ul className="slider">
            <li className="slider--item slider--item-left">
              <a href="#0">
                <div className="slider--item-image">
                  <img src="assets/img/work-victory.jpg" alt="Victory" />
                </div>
                <p className="slider--item-title">Victory</p>
                <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
            </li>
            <li className="slider--item slider--item-center">
              <a href="#0">
                <div className="slider--item-image">
                  <img src="assets/img/work-metiew-smith.jpg" alt="Metiew and Smith" />
                </div>
                <p className="slider--item-title">Metiew &amp; Smith</p>
                <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
            </li>
            <li className="slider--item slider--item-right">
              <a href="#0">
                <div className="slider--item-image">
                  <img src="assets/img/work-alex-nowak.jpg" alt="Alex Nowak" />
                </div>
                <p className="slider--item-title">Alex Nowak</p>
                <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
            </li>
          </ul>
          <div className="slider--prev">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 150 118"
              style={{ enableBackground: 'new 0 0 150 118' }}
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
      c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
      c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z" />
              </g>
            </svg>
          </div>
          <div className="slider--next">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 150 118"
              style={{ enableBackground: 'new 0 0 150 118' }}
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
      c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
      c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkSection;
