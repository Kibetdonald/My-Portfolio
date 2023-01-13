import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Fade from "react-reveal";
import "./style.css";
import "./responsive.css";
/**
 * @author
 * @function Experience
 **/

const Experience = (props) => {
  return (
    <div id="Experience" className="Experience">
      <Fade bottom>
        <h1>Education & Experience</h1>
      </Fade>

      <Fade bottom>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="&nbsp; December 2022 - Present &nbsp;&nbsp;"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Developer{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web and Mobile App development
            </h4>
            <p>
              UI/UX Design, API Development, AWS, Project Management, System
              testing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="&nbsp; July 2022 - November 2022&nbsp;&nbsp;"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Impax Business solution
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Microsoft Dynamics 365 F&O Development Intern
            </h4>
            <p>ERP Customizing, designing, and supporting using X++(AX7).</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="&nbsp;&nbsp;2021 November - 2022 July"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              ICT Authority Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software development & Innovation
            </h4>
            <p>
              Software development, reviewing and conducting research on
              innovations from the whitebox.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="&nbsp; October 2020 - 2021 October&nbsp;&nbsp;"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Freelancing, </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software development & writing
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="&nbsp;&nbsp; 2019 May &nbsp;- 2019 August"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="&nbsp;2021 November - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">IT Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Technical support
            </h4>
            <p>Almasi Bottlers limited</p>
          </VerticalTimelineElement>

          {/* University Education */}
          <VerticalTimelineElement
            date="&nbsp;September 2016- October 2020&nbsp;&nbsp;"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="&nbsp;2021 November - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">BBIT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              University degree certification
            </h4>
            <p>Africa Nazarene University</p>
          </VerticalTimelineElement>

          {/* Secondary education */}

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="&nbsp;&nbsp;2012 - 2015"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="&nbsp;2021 November - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              KCSE Certification
            </h4>
            <p>Tenges Boys, High School</p>
          </VerticalTimelineElement>

          {/* primary school education */}

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="&nbsp;2004 - 2011&nbsp;&nbsp;"
            // className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="&nbsp;2021 November - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Primary School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              KCPE Certification
            </h4>
            <p>Alpha , School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Fade>
    </div>
  );
};

export default Experience;
