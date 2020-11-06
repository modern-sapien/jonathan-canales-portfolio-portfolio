import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark dark-mode-nav ">
      <NavLink className="navbar-brand ml-2" to="/">
        Jonathan Canales
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item font-weight-normal">
            <a
              className="nav-link"
              id="resume"
              href="https://docs.google.com/document/d/15_fhNYhoWhs-jhDepklAoRYUjy2g0Ne8xnrR0n6PQyg/edit?usp=sharing"
            >
              Resume
            </a>
          </li>

          <li className="nav-item font-weight-normal">
            <a
              className="nav-link"
              id="contact-html"
              href="mailto: joncanales2@gmail.com"
            >
              Contact
            </a>
          </li>

          <li className="nav-item font-weight-normal">
            <a className="nav-link" id="portfolio" href="/portfolio">
              Portfolio
            </a>
          </li>

          <li className="nav-item font-weight-normal">
            <a className="nav-link" id="index" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
