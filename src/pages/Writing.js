import React from "react";
import WritingCard from "../components/WritingCard";
import { writingList } from "../helpers/WritingList";
import Navbar from "../components/Navbar";

import "../styles/Writing.css";
function Writing() {
  return (
    <div className="writing">
      <Navbar></Navbar>
      <h1> Writing </h1>
      <div className="writingList">
        {writingList.map((writing) => (
          <WritingCard
            name={writing.name}
            image={writing.image}
            description={writing.description}
            link={writing.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Writing;
