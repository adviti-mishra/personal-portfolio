import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComputerIcon from "@mui/icons-material/Computer";

function ExperienceCard({
  image,
  name,
  title,
  bulletPoints,
  skills,
  gitHubLink,
  demo,
  flow,
  recognition,
  lor,
}) {
  return (
    <div className="experienceItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2> {name} </h2>
      <p> {title} </p>
      <ul align="left">
        {bulletPoints.map((bulletPoint) => (
          <li> {bulletPoint} </li>
        ))}
      </ul>
      <p> Skills: {skills}</p>
      <div className="link-container">
        {gitHubLink ? <a href={gitHubLink}>GitHub</a> : null}
        {demo ? <a href={demo}>Demo</a> : null}
        {flow ? <a href={flow}>Flow</a> : null}
        {recognition ? <a href={recognition}> Recognition </a> : null}
        {lor ? <a href={lor}> Recommendation Letter </a> : null}
      </div>
    </div>
  );
}

export default ExperienceCard;
