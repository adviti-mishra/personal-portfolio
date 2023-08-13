import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Project from "./Projects.js";
import WorkExperience from "./WorkExperience.js";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Adviti Mishra </h2>
        <div className="prompt">
          <p>
            I'm a junior majoring in Computer Science with a minor in Business
            at The University of Michigan Ann Arbor. I have experience with web
            development, mobile app development, and exploratory data analysis
            through internships and side projects!
          </p>
          <p>
            I'm a member of communities like Rewriting the Code (RTC), the
            Society of Women Engineers (SWE), and the Grace Hopper Conference
            (GHC '23).
          </p>
          <p>
            At my university, I'm a Teaching Assistant for Programming and Data
            Structures, the Sponsorship Lead of MHacks, and used to be a
            Technology Peer Mentor at optiMize's Social Innovation Challenge.
          </p>
          <p>
            In my free time, I love listening to Taylor Swift (top 0.5%
            listeners for 4 years now), making rangolis, curating fun facts,
            distance running (3-6 miles), and writing
          </p>
          <a href={`https://www.linkedin.com/in/advitimishra/`}>
            <LinkedInIcon />
          </a>

          <a href={`mailto:adviti@umich.edu`}>
            <EmailIcon />
          </a>

          <a href={`https://github.com/adviti-mishra`}>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h3> Languages: </h3>
            <span>
              Python, C++, JavaScript, Java, Dart, C, Google Apps Script, ARM
            </span>
          </li>
          <li className="item">
            <h3> Front-end: </h3>
            <span>
              React, HTML, CSS, Tailwind CSS, Flutter, NPM, MaterialUI
            </span>
          </li>
          <li className="item">
            <h3> Back-end: </h3>
            <span> Firebase, MongoDB, Supabase, MySQL</span>
          </li>
          <li className="item">
            <h3> Data Analysis: </h3>
            <span> Pandas, NumPy, Seaborn, Matplotlib</span>
          </li>
          <li className="item">
            <h3> Tools and technologies: </h3>
            <span>
              Git, VSCode, XCode, Android Studio, Postman, Jupyter Notebook
            </span>
          </li>
        </ol>
      </div>
      <WorkExperience />
      <Project />
    </div>
  );
}

export default Home;
