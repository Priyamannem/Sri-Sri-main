import React from 'react';
import './Header.css';
import logoImage from '../assets/images/apple-touch-icon-Picsart-AiImageEnhancer.png';

const Header = ({ title = "SRI SRI ARCADE" }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-flex">
          <div className="header-items-center">
            <div className="header-logo">
              <img src={logoImage} alt="SRI Logo" className="header-logo-img" />
            </div>
            <h1 className="header-title">{title}</h1>
          </div>
          <div className="header-button-container">
            <button className="header-button">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
