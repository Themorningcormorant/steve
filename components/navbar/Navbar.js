import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>LmaAI</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="ai" smooth={true} duration={500}>
          <li>AI</li>
        </Link>
        <Link to="blog" smooth={true} duration={500}>
          <li>Blog</li>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li>About</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="ai" smooth={true} duration={500}>
            <li>AI</li>
          </Link>
          <Link to="blog" smooth={true} duration={500}>
            <li>Blog</li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li>About</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaTiktok className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
