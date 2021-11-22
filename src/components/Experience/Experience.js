import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';

/**
* @author
* @function Experience
**/

const Experience = (props) => {
  return(
    <div id="Experience" className="Experience">
      <h1>Education & Experience</h1>
      
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="&nbsp;2021 November - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">ICT Authority Internship</h3>
    <h4 className="vertical-timeline-element-subtitle">Software development & Innovation</h4>
    <p>
      Software development, reviewing and conducting research on innovations from the whitebox. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="&nbsp;2020 - present&nbsp;&nbsp;"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Freelancer</h3>
    <h4 className="vertical-timeline-element-subtitle">Software development & writing</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 May &nbsp;"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">IT Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Technical support</h4>
    <p>
    Almasi Bottlers limited
    </p>
  </VerticalTimelineElement>

  {/* University Education */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="&nbsp;September 2016- October 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">BBIT</h3>
    <h4 className="vertical-timeline-element-subtitle">University degree certification</h4>
    <p>
     Africa Nazarene University
    </p>
  </VerticalTimelineElement>

  {/* Secondary education */}


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2012 - 2015 &nbsp;"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">High School</h3>
    <h4 className="vertical-timeline-element-subtitle">KCSE Certification</h4>
    <p>
      Tenges Boys, High School
    </p>
  </VerticalTimelineElement>

  {/* primary school education */}


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="&nbsp;2004 - 20011"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Primary School</h3>
    <h4 className="vertical-timeline-element-subtitle">KCPE Certification</h4>
    <p>
      Alpha , School
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
   )

 }

export default Experience