import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <>
      {props.projects.map((project) => (
        <div key={project.id} className="col-sm-5 col-md-4">
          <a href={project.deployed} target="_blank">
            <img
              className="project-image-container"
              src={project.img}
              alt={project.name}
            />
          </a>
          <div className="project-text-container">
            <p className="my-0">{project.name}</p>
            <a href={project.git} target="_blank">
              {" "}
              <p className="hyperlink">Github</p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
