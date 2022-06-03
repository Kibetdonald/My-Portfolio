import React from "react";
import "./style.css";
import "./responsive.css";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
/**
 * @author
 * @function About
 **/

const About = () => {
  return (
    <div id="About" className="about">
      <Fade bottom>
        <h1 className="header_about">About Me</h1>
      </Fade>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <span
            className="Aboutme"
            style={{ fontSize: "16px", color: "#E1E4E8" }}
          >
            <Fade bottom>
              My name is Donald Kibet and am skilled with both front-end and
              back-end development, technical support, database management and
              networking. Additionally, my abilities extend to critical thinking
              and communication with proficiency in decision-making.
            </Fade>
          </span>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <Fade bottom>
            <img
              src="./assets/images/don.png"
              alt="Avatar"
              className="avatar"
            ></img>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default About;
