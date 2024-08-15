import React from 'react';
import back from '../assets/images/back.png';
import next from '../assets/images/next.png';

const NavigationButtons = () => (
  <div className="navigation-buttons">
    <button className="btn nav-button">
      <img src={back} alt="Back" className="nav-icon" />
      <span className="nav-text">Back</span>
    </button>
    <button className="btn nav-button">
      <img src={next} alt="Next" className="nav-icon" />
      <span className="nav-text">Next</span>
    </button>
  </div>
);

export default NavigationButtons;
