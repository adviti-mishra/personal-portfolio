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
            <p>
              Check out my skills, work experiences, and project experiences
              here!
            </p>
            Hi! I'm a junior majoring in Computer Science with a minor in
            Business at The University of Michigan Ann Arbor. I have experience
            with web development, mobile app development, and exploratory data
            analysis through internships and side projects!
          </p>
          <p>
            At my university, I'm a Teaching Assistant for
            <a href={`https://rewritingthecode.org/`}>
              Programming and Data Structures (EECS 280)
            </a>
            , the Sponsorship Lead of
            <a href={`https://rewritingthecode.org/`}>MHacks</a>, and used to be
            a Technology Peer Mentor at
            <a href={`https://rewritingthecode.org/`}>
              optiMize's Social Innovation Challenge
            </a>
          </p>
          <p>
            I'm also a member of communities like
            <a href={`https://rewritingthecode.org/`}>
              Rewriting the Code (RTC)
            </a>
            ,
            <a href={`https://www.swe.engin.umich.edu/`}>
              Society of Women Engineers (SWE)
            </a>
            , and the
            <a href={`https://ghc.anitab.org/`}>
              Grace Hopper Conference (vGHC '23)
            </a>
            .
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
      <div id="skills" className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <h3>Languages :</h3>
          <li className="item">
            <span>
              Python, C++, JavaScript, Java, Dart, C, Google Apps Script, ARM
            </span>
          </li>
          <h3>Front-end :</h3>
          <li className="item">
            <span>
              React, HTML, CSS, Tailwind CSS, Flutter, NPM, MaterialUI
            </span>
          </li>
          <h3>Back-end :</h3>
          <li className="item">
            <span>Firebase, MongoDB, Supabase, MySQL</span>
          </li>
          <h3> Data Analysis :</h3>
          <li className="item">
            <span> Pandas, NumPy, Seaborn, Matplotlib</span>
          </li>
          <h3> Tools and technologies :</h3>
          <li className="item">
            <span>
              Git, VSCode, XCode, Android Studio, Postman, Jupyter Notebook
            </span>
          </li>
        </ol>
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="projects">
        <Project />
      </div>
    </div>
  );
}

export default Home;
