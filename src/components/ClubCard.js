import React from "react";

function ClubCard({ image, name, description, website }) {
  return (
    <div className="clubItem">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {description}</p>
        <div className="link-container">
          <a href={website}>{website}</a>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
