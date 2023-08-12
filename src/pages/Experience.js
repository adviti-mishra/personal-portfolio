import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#21325e">
        {/* Exploratory Data Analysis */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023- July 2023"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<BusinessIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            University of Michigan School of Information
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Exploratory Data Analysis Research Intern
          </h3>
          <p>
            Conducted exploratory data analysis using pandas, numpy, seaborn,
            and matplotlib on a dataset of donation habits of University of
            Michigan alumni, drafting a report of insights inclusive of
            identity, graduation year, and degree obtained as explanatory
            factors
          </p>
        </VerticalTimelineElement>

        {/* optiMize Social Innovation Challenge Fellowship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022- July 2022"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<BusinessIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            optiMize Social Innovation Challenge Fellowship (MediHealth)
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Founder and Software Engineer
          </h3>
          <p>
            Developed a MVP of a mobile application aiming to increase
            medication compliance amongst the elderly by providing emotional
            support, winning ~$4,000 in funding out of 200+ pitches.
          </p>
        </VerticalTimelineElement>

        {/* Yatra Online Pvt. Ltd. (Yatra Covid Connect) */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021- July 2021"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<BusinessIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Yatra Online Pvt. Ltd.
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            Software Engineering Intern
          </h3>
          <p>
            Worked as one of the initiators and software engineers ( Letter of
            Recommendation) of Yatra Covid Connect - a digital repository of
            58,000+ verified Covid-19 amenities with a reach of ~6 million
            families in India. This project was recognized by 5+ news websites.
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

export default Experience;
