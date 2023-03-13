import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "..//projects.json";
import "./project.css"

// //Use .map to display cards with projects info sourced from json file.

// function ProjectsGallery() {
//   return (
//     <div className="project-container">
//       <h2 className="title">My projects</h2>
//       <div className="cards-container">
//         {projects.map(function (projects) {
//           return (
//             <ProjectCard
//               key={projects.id}
//               name={projects.title}
//               image={projects.image}
//               deployed={projects.deployed}
//               github={projects.github}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProjectsGallery;

function ProjectsGallery() {

  return (
    <div className='projects-container'>
      <div className='projects-wrapper'>
        <h2> Recent Projects</h2>
        <div className='project-wrapper'>
          {/*Looping through the the projects.json object and rendering each project dinamically */}
          {projects.map( p => <ProjectCard project={p} key={p.id} />)}
        </div>
      </div>
    </div>
  )
}

export default ProjectsGallery