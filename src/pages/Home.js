import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Project from "./Projects.js";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Adviti Mishra </h2>
        <div className="prompt">
          <p>
            I'm a junior majoring in Computer Science with a minor in Business
            at The University of Michigan Ann Arbor (Go Blue!). Check out my
            skills, projects, club involvements, and personal interests!
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Languages: </h2>
            <span>
              Python, C++, JavaScript, Java, Dart, C, Google Apps Script, ARM
            </span>
          </li>
          <li className="item">
            <h2> Front-end: </h2>
            <span>
              React, HTML, CSS, Tailwind CSS, Flutter, NPM, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2> Back-end: </h2>
            <span> Firebase, MongoDB, Supabase, MySQL</span>
          </li>
          <li className="item">
            <h2> Data Analysis: </h2>
            <span> Pandas, NumPy, Seaborn, Matplotlib</span>
          </li>
          <li className="item">
            <h2> Tools and technologies: </h2>
            <span>
              Git, VSCode, XCode, Android Studio, Postman, Jupyter Notebook
            </span>
          </li>
        </ol>
      </div>
      <Project />
    </div>
  );
}

export default Home;
