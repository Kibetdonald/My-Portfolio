import React from 'react'
// import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import style
import './style.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Typical from "react-typical"
import { Row, Col } from 'react-bootstrap';
import '../responsive.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div>

            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"> <img className="logo" src="./assets/images/logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav style={{ marginTop: "auto" }} className="me-auto">
                                <Nav.Link className="navLink" href="#About">About</Nav.Link>
                                <Nav.Link className="navLink" href="#Skills">Skills</Nav.Link>
                                <Nav.Link className="navLink" href="#Experience">Experience</Nav.Link>
                                <Nav.Link className="navLink" href="#Myprojects">Projects</Nav.Link>
                                <Nav.Link className="navLink" href="#Contact">Contact</Nav.Link>
                                <Nav.Link >
                                    <button style={{ marginTop: "-10%" }} type="submit" onclick="window.open('file.doc')" className="btn btn-outline-danger">RESUME</button>
                                </Nav.Link>
                            </Nav>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>
                <Col>
                    <div className="centerDiv">
                        <h1>Hi, I'm Donald</h1>

                        <Typical
                            className="typicalText"
                            steps={['A jack of all trade in the tech industry..', 3000,
                                'I design and build user interface', 1500,
                                'A back end & front end developer', 1500,
                                'Technical support specialist', 1500,
                                'Computer security expert', 1500,]}
                            loop={Infinity}
                            wrapper="p"
                        />
                        <span className="aboutText">
                            I'm a passionate junior fullstack software engineer
                            specializing in building highly responsive web and
                            android apps using the latest technology platforms.
                        </span>
                        <br />


                    </div>


                    <input style={{ height: "40px", width: "40%", marginLeft: "20%", marginTop: "5%", borderRadius: "2px", backgroundColor: "#061a37", borderColor: "#00D4FF" }} placeholder="Your Email Address" type="text" /><button className="common-btn">Get in touch</button>
                    <br />
                    <img style={{ marginLeft: "20%", marginTop: "2%" }} src="/assets/images/people.png" />

                </Col>
                <Col> <div className="svgImage">
                    <img src="./assets/images/ai.png" width="70%" alt="svg" />
                </div></Col>
            </Row>
            <div className="fixedText">
                <Col>
                    <Row>
                        <a href="https://github.com/Kibetdonald" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>

                    </Row>
                    <Row>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
                            <i class="fa fa-google" style={{marginLeft: "65%", fontSize: "24px"}} aria-hidden="true"></i>
                        </a>
                    
                    </Row>
            
                    {/* <Row> <a href="gmail.com" target="_blank" >  <i class="fa fa-google" style={{marginLeft: "60%", fontSize: "24px"}} aria-hidden="true"></i></a></Row>                */}
                    <Row><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></Row>
                    <Row><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></Row>
                    <Row> <a href="https://www.linkedin.com/in/donald-kibet-29a29a183/">  <i class="fa fa-linkedin" aria-hidden="true"></i></a></Row>

                    <div className="vertical"></div>
                </Col>
            </div>
            <div className="fixedTextRight">
                <Col>

                    <Row><span className="profileText">kibetdonald97@gmail.com</span></Row>
                    <div className="vertical2"></div>
                </Col>
            </div>


        </div>
    )

}

export default Header