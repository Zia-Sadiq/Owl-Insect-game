import React from 'react';

const OptionButton = ({ src, alt, onClick }) => (
  <button className="btn option-button" onClick={onClick}>
    <img src={src} alt={alt} className="option-img" />
    <span className="option-text">{alt}</span>
  </button>
);

export default OptionButton;
