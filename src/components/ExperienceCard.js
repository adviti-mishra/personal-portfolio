import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ExperienceCard({
  image,
  name,
  title,
  bulletPoints,
  skills,
  gitHubLink,
  link,
}) {
  return (
    <div className="experienceItem">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {title} </p>
        <ul align="left">
          {bulletPoints.map((bulletPoint) => (
            <li> {bulletPoint} </li>
          ))}
        </ul>
        <p> Skills: {skills}</p>
        <p>{{ gitHubLink } != "" ? <GitHubIcon /> : null}</p>
        <p>{{ link } ? link : ""}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
