import React from "react";
import ClubCard from "../components/ClubCard";
import { clubsList } from "../helpers/clubsList";
import Navbar from "../components/Navbar";

import "../styles/Club.css";
function Clubs() {
  return (
    <div className="projects">
      <Navbar></Navbar>
      <h1> Organizations </h1>
      <div className="clubList">
        {clubsList.map((club) => (
          <ClubCard
            name={club.name}
            image={club.image}
            description={club.description}
            website={club.website}
          />
        ))}
      </div>
    </div>
  );
}

export default Clubs;
