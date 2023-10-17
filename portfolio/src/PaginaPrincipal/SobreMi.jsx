import React from "react";
import "../styles/sobre_mi.css"; // Import the CSS file

export const SobreMi = () => {
  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>
      <div className="row justify-content-center p-5">
        <div className="col-md-6">
          <p className="text-description">
            Hello I'm Fernando. I'm a Computer Engineering student at
            Universidad Nacional de Río Negro with a passion for many software
            and hardware-related topics such as machine learning and robotics.
            I'm also certified by the Alura Oracle-Next program, it is a
            full-stack curriculum but I do have a preference for working in the
            back-end. I have work experience in web programming and scrum
            leadership. I love to work in teams, and I am currently working as a
            freelancer and doing an internship at an enterprise that is
            challenging me. My beliefs about software development are not to tie
            myself to any technology, but to use the best tool for the job. I'm
            always looking for new challenges and job opportunities to grow as a
            professional. In my free time, you can find me at the gym in San
            Carlos de Bariloche.
          </p>
        </div>
      </div>
    </div>
  );
};
