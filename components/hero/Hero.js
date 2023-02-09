import React from "react";

//import { AiOutlineSearch } from "react-icons/ai";

const video = "/rostis.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to LmaAI Research League, Ongoing project, More To Come</h1>
        <h2>Scroll Down Ask Lma Your Question </h2>
      </div>
    </div>
  );
}

export default Hero;
