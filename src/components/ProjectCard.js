import React from "react";

function ProjectCard(props) {

  return (
    <div className="card ">
      <a href={props.Deployed}>
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top"
          alt="..."
        />
      </a>
      <div className="card-body">
        <p className="card-title"> {props.title} </p>
        <p className="card-text"> {props.description}</p>
      </div>
    </div>
);

}
export default ProjectCard;