import React from "react";
// import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import style
import TypeAnimation from "react-type-animation";
import "./style.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Typical from "react-typical";
import { Row, Col } from "react-bootstrap";
import "../responsive.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <div>




        {/* unresponsive nav */}
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img className="logo" src="./assets/images/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav style={{ marginTop: "auto" }} className="me-auto">
                <Nav.Link className="navLink" href="#About">
                  About
                </Nav.Link>
                <Nav.Link className="navLink" href="#Skills">
                  Skills
                </Nav.Link>
                <Nav.Link className="navLink" href="#Experience">
                  Experience
                </Nav.Link>
                <Nav.Link className="navLink" href="#Myprojects">
                  Projects
                </Nav.Link>
                <Nav.Link className="navLink" href="#Contact">
                  Contact
                </Nav.Link>
                <Nav.Link>
                  <button
                    style={{ marginTop: "-10%" }}
                    type="submit"
                    onclick="window.open('file.doc')"
                    className="btn btn-outline-danger"
                  >
                    RESUME
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="centerDiv">
        <h1>Hi,</h1>
        <h2>I'm Donald Kibet</h2>
        <TypeAnimation
          className="typicalText"
          cursor={true}
          sequence={[
            "A jack of all trade in the tech industry.",
            1000,
            "I design and build user interface",
            1000,
            "A back end & front end developer",
            1000,
            "Technical support specialist",
            1000,
            "I design and build user interface",
            1000,
            "Flutter developer",
            1000,

            "",
          ]}
          wrapper="p"
          repeat={Infinity}
        />


        <span className="aboutText">
          I'm a passionate junior fullstack software engineer specializing in
          building highly responsive web and android apps using the latest
          technology platforms.
        </span>
        <br />
      </div>

      {/* <input
            style={{
              height: "40px",
              width: "20%",
              marginLeft: "20%",
              marginTop: "5%",
              borderRadius: "4px",
              backgroundColor: "#061a37",
              borderColor: "#00D4FF",
            }}
            placeholder="Your Email Address"
            type="text"
          /> */}
      {/* <button className="common-btn">Get in touch</button> */}
      <div class="btn btn-one">
        <span>Contact Me</span>
      </div>
      <br />

      <div className="fixedText">
        <Col>
          <Row>
            <a href="https://github.com/Kibetdonald" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </Row>
          <br/>
        
          <Row>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
            >
              <i
                class="fa fa-google"
                style={{ marginLeft: "65%", fontSize: "24px" }}
                aria-hidden="true"
              ></i>
            </a>
          </Row>
          <br/>
          <Row>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </Row>
          <Row>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </Row>
          <Row>
            {" "}
            <a href="https://www.linkedin.com/in/donald-kibet-29a29a183/">
              {" "}
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </Row>

          <div className="vertical"></div>
        </Col>
      </div>

      <div className="fixedTextRight">
        <Col>
          <Row>
            <span className="profileText">kibetdonald97@gmail.com</span>
          </Row>
          <div className="vertical2"></div>
        </Col>
      </div>
    </div>
  );
};

export default Header;
