import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import Navbar from "../components/Navbar";
function Timeline() {
  return (
    <div className="experience">
      <Navbar></Navbar>
      <h1> Education </h1>
      <VerticalTimeline lineColor="#21325e">
        {/* St. Gregoris High School */}

        <VerticalTimelineElement
          className="vertical-timeline-element --education"
          date="2019-2021"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            The University of Michigan
          </h2>
          <h3 className="vertical-timeline-element-subtitle">GPA: 3.7 </h3>
          <p>
            Honors :
            <ul align="left">
              <li> CSE Outstanding Service Award </li>
              <li> Willian Barnstorm Freshman prize (top 5% of 4000)</li>
              <li>
                James A. Angell Scholar (all As for more than 2 semesters)
              </li>
              <li> University Honors </li>
            </ul>
          </p>
          <p>
            Activities :
            <ul align="left">
              <li> Co-Director and Sponsorship Lead @ MHacks 16 </li>
              <li>
                Teaching Assistant @ Programming and Data Structures (EECS 280)
              </li>
              <li>
                Technology Peer Mentor @ optiMize Social Innovation Challenge{" "}
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* St. Gregoris High School */}

        <VerticalTimelineElement
          className="vertical-timeline-element --education"
          date="2019-2021"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            The Cathedral and John Connon School
          </h2>
          <h3 className="vertical-timeline-element-subtitle">IB : 44/45</h3>
          <p>
            Honors :
            <ul align="left">
              <li> The Social Impact Prize (batch of 45)</li>
              <li> 1st in IB Economics Higher Level (2020)</li>
              <li> 1st in IB Economics Higher Level (2021)</li>
            </ul>
          </p>
          <p>
            Activities :
            <ul align="left">
              <li> TEDx speaker @ TEDxYouth@NMS</li>
              <li> Member @ Robotics Club</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* St. Gregoris High School */}
        <VerticalTimelineElement
          className="vertical-timeline-element --education"
          date="2007-2019"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            St. Gregorios High School
          </h2>
          <h3 className="vertical-timeline-element-subtitle">ICSE : 98.4%</h3>
          <p>
            Honors :
            <ul align="left">
              <li>1st in Java Computer Applications (batch of 100)</li>
              <li> 1st in Mathematics (batch of 160)</li>
            </ul>
          </p>
          <p>
            Activities :
            <ul align="left">
              <li>President @ The Interact Club</li>
              <li> Discipline Captain @ Student Government </li>
              <li>
                Student Correspondent @ The Times of India Newspaper in
                Education
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
