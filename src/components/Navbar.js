import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  // Whether or not the Navbar is expanded
  const [expandNavBar, setExpandNavbar] = useState(false);
  // Information about which route you're in
  const location = useLocation();
  // whenever the location changes, set expandNavBar to false
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(!expandNavBar)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}> Home </Link>
        <Link to={"/projects"}> Projects </Link>
        <Link to={"/clubs"}> Clubs </Link>
        <Link to={"/life"}> Life </Link>
      </div>
    </div>
  );
}

export default Navbar;
