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
  link,
  recognition,
  lor,
  location,
  time,
  description,
}) {
  return (
    <div className="experienceItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2> {name} </h2>
      <p>
        {" "}
        <b> Title: </b> {title}{" "}
      </p>
      <p>
        {" "}
        <b> Dates: </b> {time}{" "}
      </p>
      <p>
        {" "}
        <b> Location: </b> {location}{" "}
      </p>
      <p>
        {" "}
        <b> Description: </b> {description}{" "}
      </p>
      <p>
        {" "}
        <b> Skills: </b> {skills}
      </p>
      <div className="link-container">
        {gitHubLink ? <a href={gitHubLink}>GitHub</a> : null}
        {demo ? <a href={demo}>Demo</a> : null}
        {flow ? <a href={flow}>Flow</a> : null}
        {link ? <a href={link}>Link</a> : null}
        {recognition ? <a href={recognition}> Features </a> : null}
        {lor ? <a href={lor}> Recommendation Letter </a> : null}
      </div>
    </div>
  );
}

export default ExperienceCard;
