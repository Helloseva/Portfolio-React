import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";
import "./project.css"

function ProjectsGallery() {

  const projectsArray = [];
  for (let i=0; i < projects.length; i++) {
    projectsArray.push(<ProjectCard
      image={projects[i].image}
      title={projects[i].title}
      description={projects[i].description}
      Deployed={projects[i].Deployed}
    />)
  } 
  return (
    <div>
      <div className="row justify-content-center" id="rows">
        <p className="projects">Courses Dashboard</p>
        <div className="container-fluid my-container">
          <div className="row">
            <div className="col-4">{projectsArray[0]}</div>
            <div className="col-4">{projectsArray[1]}</div>
            <div className="col-4">{projectsArray[2]}</div>
          </div>
          <div className="row">
            <div className="col-4">{projectsArray[3]}</div>
            <div className="col-4">{projectsArray[4]}</div>
            <div className="col-4">{projectsArray[5]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectsGallery