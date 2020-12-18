import React from "react";
import { Link } from "react-router-dom";
import VrBackground from "../../components/VrBackground/VrBackground";

const About = () => {
  return (
    <>
      <VrBackground className="background" />
      <div id="info" className="bg-transparent row mt-3">
        <div className="col-sm-6 col-md-6 mt-3 d-flex justify-content-center"></div>
        <div className="col-sm-6 col-md-4  text-light py-3 content">
          <p>
            {" "}
            I’m a driven and bold Full Stack Developer, UX Designer & Researcher
            that is passionate about solving problems through intentional
            processes.
          </p>
          <p>
            {" "}
            I believe in rapid prototyping, design sprints, asking questions and
            learning through teaching.
          </p>
          <Link to="/jonathan-canales-portfolio-react/portfolio/">
            <div
              className="btn btn-light modern-sapien-btn col-12"
              id="projects-button"
            >
              {" "}
              PROJECTS
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
