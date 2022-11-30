import React from "react";
import "../styles/header.css"
import Resume from "./resume"
import Socials from "./socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tan Chong Kai</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Resume/>
        <Socials/>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;