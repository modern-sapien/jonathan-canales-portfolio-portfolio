import React from "react";

const Project = (props) => {
  return (
    <>
      {props.projects.map((project) => (
        <div className="col-sm-4">{project.name} </div>
      ))}
    </>
  );
};

export default Project;
