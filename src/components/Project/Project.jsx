import React from "react";
import {Link} from "react-router-dom";

const Project = (props) => {
  return (
    <div className="row">
      {props.projects.map((project) => (
        <div key={project.id} className="col-4 text-light pb-2">
        <a href={project.deployed} target="blank">
        <img className="project-image-container" src={project.img} alt={project.name}/>
        </a>
        <p className="my-0">{project.name}
        </p>
        <a href={project.git}> <p className="my-0">Github</p>
         </a>
         </div>
      ))}
    </div>
  );
};

export default Project;
