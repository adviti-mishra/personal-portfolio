import React from "react";

function WritingCard({ image, name, description, link }) {
  return (
    <div className="writingItem">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2> {name} </h2>
        <p> {description}</p>
        <div className="link-container">
          <a href={link}> link </a>
        </div>
      </div>
    </div>
  );
}

export default WritingCard;
