import React from "react";
import "../styles/sobre_mi.css"; // Import the CSS file

export const SobreMi = () => {
  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>
      <div className="row justify-content-center p-5">
        <div className="col-md-6">
          <p className="text-description">
            Hello there! I'm Fernando. I'm a Computer Engineering student at
            UNRN with a passion for almost all software and hardware-related
            topics. I'm also certified by the Alura Oracle-Next program, it is a
            full-stack curriculum but I do have a preference for working in the
            back-end. I have work experience in web programming and scrum
            leadership. I love to work in teams, and I am currently working as a
            freelancer and doing an internship at an enterprise that is
            challenging me with data structures, algorithm analysis, design
            patterns, and software architecture but also with math and
            physics-related topics. My beliefs about software development are
            not to tie myself to any technology, but to use the best tool for
            the job applying computer science concepts. I'm always looking for
            new challenges and job opportunities to grow as a professional. In
            my free time, you can find me at the gym or trekking in San Carlos
            de Bariloche.
          </p>
        </div>
      </div>
    </div>
  );
};
