import React from "react";

function ProjectCard({ image, name, description, skills, gitHubLink }) {
  return (
    <div className="projectItem">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {description}</p>
        <p> Skills: </p>
        <p> {skills}</p>
        <div className="link-container">
          {gitHubLink ? <a href={gitHubLink}>GitHub</a> : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
