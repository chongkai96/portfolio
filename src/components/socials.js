import React from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/tan-chong-kai-a3827020b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/chongkai96" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  );
}

export default Socials;