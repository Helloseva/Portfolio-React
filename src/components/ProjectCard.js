import React from "react";

function ProjectCard({project}) {

  return (
    <div className='project-container'>
        <div className='overlay'></div>
        <div className='content'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
        <a href={project.Deployed} className="button" target="_blank" rel="noreferrer">Deployed</a>
        <a href={project.Github} className="button" target="_blank" rel="noreferrer">Github Repository</a>
    </div>
  )
}
export default ProjectCard;