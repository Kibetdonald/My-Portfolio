import React from "react";
// import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./responsive.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Typical from "react-typical";
import { Row, Col } from "react-bootstrap";
import "../responsive.css";
import { RandomReveal } from "react-random-reveal";
import Fade from "react-reveal";

const Header = () => {
  return (
    <div className="headerbody">
      <Fade top>
        <Navbar
          className="nav"
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <br />
              <img className="logo" src="./assets/images/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle style={{ backgroundColor: "#0582A5" }} />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav style={{ marginTop: "auto" }} className="me-auto">
                  <Nav.Link className="navLink" href="#About">
                    <span style={{color: "#8892b0"}}>01. </span>About
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#Skills">
                  <span style={{color: "#8892b0"}}>02. </span> Skills
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#Experience">
                  <span style={{color: "#8892b0"}}>03. </span> Experience
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#Myprojects">
                  <span style={{color: "#8892b0"}}>04. </span> Projects
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#Contact">
                  <span style={{color: "#8892b0"}}>05. </span>  Contact
                  </Nav.Link>
                  <Nav.Link>
                    {/* <jsfunct/> */}
                    <button
                      style={{ marginTop: "-5%" }}
                      type="submit"
                      onClick="window.open('file.doc')"
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
      </Fade>

      <div className="centerDiv">
        <Fade bottom>
          <h6 className="heading_one">Hi,</h6>
        </Fade>
        <Fade bottom>
          <h2 className="heading_two">
            <RandomReveal
              // onComplete={() => ({ shouldRepeat: true, delay: 3 })}
              style={{ fontSize: "42px" }}
              isPlaying
              duration={4.6}
              revealDuration={0.5}
              characters=" I'm Donald."
            />
          </h2>
        </Fade>
        <Fade bottom>
          <h3 className="heading_three">
            I design and build software products.
          </h3>
        </Fade>
        <Fade bottom>
          <p className="aboutText">
            I'm a full-stack software engineer and solution architect that
            specializes in solving real-world problems by creating highly
            responsive web and Android apps utilizing cutting-edge technology
            languages and frameworks.
          </p>
        </Fade>
        <br />
      </div>

      <Fade bottom>
        <div className="btn btn_one">
          <span>Contact Me</span>
        </div>
      </Fade>

      <br />

      <Fade left>
        <div className="fixedText">
          <Col>
            <Row>
              <a href="https://github.com/Kibetdonald" target="_blank">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </Row>
            <div className="whitespace"> </div>

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
      </Fade>

      <Fade right>
        <div className="fixedTextRight">
          <Col>
            <Row>
              <span className="profileText">kibetdonald97@gmail.com</span>
            </Row>
            <div className="vertical2"></div>
          </Col>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
