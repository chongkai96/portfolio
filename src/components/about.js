import React from "react";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2"
import {GiNotebook} from "react-icons/gi"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__content">
        <div className="about__cards">
          <article className="about_card">
            <HiOutlineMagnifyingGlass/>
            <h5>Detail-Oriented</h5>
          </article>
          <article className="about_card">
            <HiOutlineMagnifyingGlass/>
            <h5>Positive Mindset</h5>
          </article>
          <article className="about_card">
            <GiNotebook/>
            <h5>Desire To Learn</h5>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;