import React from "react";
import {Link} from "react-router-dom";

const Project = (props) => {
  return (


    <div className="carousel-item">
    {props.projects.map((project) => (
        <>
        <a href={project.deployed} target="blank">
          <img src={project.img} className="d-block w-100" alt={project.name} /> </a>

        <div key={project.id} className="carousel-caption d-none d-md-block">
          <h5>{project.name}</h5>
        <a href={project.git}> <p className="mb-5 hyperlink">Github</p>
         </a>
         </div>
         </>
))}
    </div>


   
   
  );
};

export default Project;
