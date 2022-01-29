import React, {useEffect, useRef} from "react";
// import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import style
import TypeAnimation from "react-type-animation";
import "./style.css";
import "./responsive.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Typical from "react-typical";
import { Row, Col } from "react-bootstrap";
import "../responsive.css";
import { TweenMax, Power3 } from "gsap";
// import { useRef } from "react";
// import { jsfunct } from "./app";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  let logoItem= useRef(null);
  let aboutText = useRef(null);
  let heading_one= useRef(null);
  let heading_two = useRef(null);
  let heading_three = useRef(null);
  let btn_one = useRef(null);
  let nav = useRef(null);
  let fixedText = useRef(null);
  let fixedTextRight = useRef(null);
  // console.log(logoItem);
  useEffect(()=>{
    console.log(logoItem)
    TweenMax.to(
      logoItem,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
      
    )
    TweenMax.to(
      aboutText,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      heading_one,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      heading_two,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      heading_three,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      btn_one,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    // navbar animation
    TweenMax.to(
      nav,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      fixedText,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      fixedTextRight,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
  },[])
  return (
    <div className="headerbody">
      {/* unresponsive nav */}
      <Navbar className="nav"  ref={el => {
              nav = el

            }} collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <br/>
            <img
            ref={el => {
              logoItem = el

            }}
             className="logo" 
             src="./assets/images/logo.png" 
             alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor: "#0582A5"}} />
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
      
      <div className="centerDiv">
        <h6  ref={el => {
              heading_one = el

            }} className="heading_one">Hi,</h6>
        <h2  ref={el => {
              heading_two = el

            }} className="heading_two">I'm Donald</h2>
        {/* <TypeAnimation
          className="typicalText"
          cursor={true}
          sequence={[
            "A jack of all trade in the tech industry.",
            4000,
            "I design and build user interface",
            4000,
            "A back end & front end developer",
            4000,
            "Technical support specialist",
            4000,
            "I design and build user interface",
            4000,
            "Flutter developer",
            4000,

            "",
          ]}
          wrapper="p"
          repeat={Infinity}
        /> */}

        <h3 ref={el => {
              heading_three = el

            }} className="heading_three">I design and build products for the web.</h3>

        <p   ref={el => {
              aboutText = el

            }}
             className="aboutText">
          I'm a passionate junior fullstack software engineer specializing in
          building highly responsive web and android apps using the latest
          technology platforms.
        </p>

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
      <div   ref={el => {
              btn_one = el

            }} class="btn btn_one">
        <span>Contact Me</span>
      </div>

      <br />

      <div className="fixedText"  ref={el => {
              fixedText = el

            }}>
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

      <div className="fixedTextRight" ref={el => {
              fixedTextRight = el

            }} >
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
