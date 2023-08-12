import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ image, name, description, skills, gitHubLink }) {
  return (
    <div className="projectItem">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {description}</p>
        <p> Skills: </p>
        <p> {skills}</p>
        <p>
          {" "}
          <GitHubIcon />{" "}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
