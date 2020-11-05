import React from "react";
import {Link} from "react-router-dom";

const Project = (props) => {
  return (
    <>
      {props.projects.map((project) => (
        <div key={project.id} className="col-sm-4">{project.name}
        <a href={project.deployed} target="blank">
        <img className="project-image-container" src={project.img} alt={project.name}/>
        </a>
        <a href={project.git}>
        <div className="btn btn-warning mt-1 small-font">{project.name} Project</div>
         </a>
         </div>
      ))}
    </>
  );
};

export default Project;
