import React from "react";
import CV from "../assets/Tan_ChongKai_CV.pdf"

const Resume = () => {
  return (
    <div className="resume">
      <a href={CV} download>Download CV</a>
      <a href="#contact">Let's Talk</a>
    </div>
  );
}

export default Resume;