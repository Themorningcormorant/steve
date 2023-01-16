import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const video = "/matrix.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Top 1% Resource</h1>
        <h2>Your Machine Learning Database</h2>
        <form className="form">
          <div>
            <input
              type="text"
              placeholder="Search Hash 0x521502eFDF4C4685c126b7Bb16FD81eB8705B381"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
