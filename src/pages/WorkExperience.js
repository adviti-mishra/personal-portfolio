import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { mainExperienceList } from "../helpers/WorkExperienceList";

import "../styles/Experience.css";

function WorkExperience() {
  return (
    <div className="experience">
      <h1> Work Experience </h1>
      <div className="experienceList">
        {mainExperienceList.map((experience) => (
          <ExperienceCard
            name={experience.name}
            image={experience.image}
            title={experience.title}
            bulletPoints={experience.bullet_points}
            skills={experience.skills}
            githubLink={experience.gitHublink}
            link={experience.link}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
