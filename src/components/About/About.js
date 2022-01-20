import React from 'react'
import './style.css';
import {Row, Col} from 'react-bootstrap'
/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div id="About" className="about">
      <h1>About Me</h1>
      <Row>
        <Col>
        <span className="Aboutme" style={{fontSize: "18px",   color: "#E1E4E8"}}>My name is Donald Kibet and am skilled with both front-end and back-end development, technical support,
            database management and networking. Additionally, my abilities extend to critical thinking 
            and communication with proficiency in decision-making. My skill set is diverse and complementary,
             and I spend my spare time working on improving my IT skills.
        </span>
        </Col>
        <Col xs={6} md={4}>
     
       <img src="./assets/images/don.png" alt="Avatar" class="avatar"></img>
        </Col>
      </Row>

    </div>
   )

 }

export default About