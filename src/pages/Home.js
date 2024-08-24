import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar.js";

function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="about">
        <h2> Hi, I'm Adviti Mishra </h2>
        <div className="prompt">
          <p>
            I'm a junior majoring in Computer Science with a minor in Business
            at The University of Michigan Ann Arbor. I have experience with web
            development, mobile app development, exploratory data analysis, and
            product management.
          </p>
          <p>
            I'm a software engineering intern at MongoDB, a hackathon
            enthussiast, and passionate about teaching.
          </p>
          <p>
            Outside of tech, I love distance running, playing my guitar,
            writing, and curating fun facts.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
