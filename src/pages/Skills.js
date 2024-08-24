import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Skills() {
  return (
    <div id="skills" className="skills">
      <Navbar></Navbar>
      <h1> Skills </h1>
      <ol className="list">
        <h3>Languages :</h3>
        <li className="item">
          <span>Python, C++, Java, Dart, C, Google Apps Script, ARM</span>
        </li>
        <h3>Front-end :</h3>
        <li className="item">
          <span>
            React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Flutter,
            NPM, MaterialUI
          </span>
        </li>
        <h3>Back-end :</h3>
        <li className="item">
          <span>Firebase, MongoDB, Supabase, MySQL, Next.js </span>
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
  );
}

export default Skills;
