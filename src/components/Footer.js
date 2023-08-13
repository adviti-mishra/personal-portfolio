import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2023 adviti-mishra.com</p>
    </div>
  );
}

export default Footer;
