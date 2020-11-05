import React from "react";

const Project = (props) => {
  return (
    <>
      {props.groceries.map((item) => (
        <div className="col-sm-4">{item.name} </div>
      ))}
    </>
  );
};

export default Project;
