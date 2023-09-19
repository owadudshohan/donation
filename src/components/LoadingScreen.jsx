import React from 'react';
import logo from './logo.svg';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="logo" className="loading-screen__logo" />
    </div>
  );
};

export default LoadingScreen;
