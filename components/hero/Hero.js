import React from "react";

//import { AiOutlineSearch } from "react-icons/ai";

const video = "/matrix.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Web3 Development | Building dApps for the future | Prompt Engineering
        </h1>
        <h2>Be Excelent To Each Other</h2>
      </div>
    </div>
  );
}

export default Hero;
