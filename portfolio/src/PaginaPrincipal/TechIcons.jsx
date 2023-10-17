// src/components/TechIcons.js
import React from 'react';
import '../styles/tech_icons.css';

const TechIcons = ({ techList }) => {
    return (
      <div className="TechIcons">
        {techList.map((tech, index) => (
          <div key={index} className="TechIcon">
            <img src={tech.logo} alt={tech.tipo} />
            <p>{tech.tipo}</p>
          </div>
        ))}
      </div>
    );
  };
  

export default TechIcons;
