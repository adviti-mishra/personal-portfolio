import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { mainExperienceList } from "../helpers/WorkExperienceList";
import Navbar from "../components/Navbar";
import "../styles/Experience.css";

function WorkExperience() {
  return (
    <div className="experience">
      <Navbar></Navbar>
      <h1> Work Experience </h1>
      <div className="experienceList">
        {mainExperienceList.map((experience) => (
          <ExperienceCard
            name={experience.name}
            image={experience.image}
            title={experience.title}
            time={experience.time}
            location={experience.location}
            description={experience.description}
            skills={experience.skills}
            gitHubLink={experience.gitHubLink}
            demo={experience.demo}
            flow={experience.flow}
            link={experience.link}
            recognition={experience.recognition}
            lor={experience.lor}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
