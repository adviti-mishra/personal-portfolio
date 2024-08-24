import React from "react";
import ProjectCard from "../components/ProjectCard";
import { mainProjectList } from "../helpers/MainProjectList";
import Navbar from "../components/Navbar";

import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <Navbar></Navbar>
      <h1>Side Projects </h1>
      <div className="projectList">
        {mainProjectList.map((project) => (
          <ProjectCard
            name={project.name}
            image={project.image}
            description={project.description}
            skills={project.skills}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
