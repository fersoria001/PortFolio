import React from 'react';
import '../styles/sobre_mi.css'; // Import the CSS file

export const SobreMi = () => {
  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>
      <div className="row justify-content-center p-5">
        <div className="col-md-6">
          <p className="text-description">
            Hi! I'm Fer. I'm a Computer 
            Engineering student at UNRN with a passion for programming. I'm also a certified FullStack Java Web Developer with expertise in MySQL. In my free time, you can find me at the gym or trekking in the beautiful mountains of San Carlos de Bariloche.
          </p>
        </div>
      </div>
    </div>
  );
};
