import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import "./responsive.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Fade from 'react-reveal';
import { MdExpandMore } from "react-icons/md";

/**
 * @author
 * @function Skills
 **/

const Skills = (props) => {
  return (
    <div id="Skills" className="Skills">
      <Fade bottom>
      <h1>Skills</h1>
      </Fade>
    <Fade bottom>
    <Accordion style={{ backgroundColor: "#051937" }} defaultExpanded="true">
        <AccordionSummary
          expandIcon={<MdExpandMore color="#fff" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: "fff", textAlign: "center" }}>
            <h6 style={{ color: "#fff", textAlign: "center" }}> Front End</h6>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign: "center"}}>
            <div className="moreinfo">
              {/* language one */}
             <>
             <Row>
                <Col className="language">HTML</Col>
                <Col className="rating">95%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "95%"}}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  95%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">CSS</Col>
                <Col className="rating">90%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "90%"}}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">React JS</Col>
                <Col className="rating">85%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">GSAP</Col>
                <Col className="rating">65%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "65%"}}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    65%
                  </div>
                </div>
             </>
            

            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fade>
    <Fade bottom>
    <Accordion style={{ backgroundColor: "#051937" }}>
        <AccordionSummary
          expandIcon={<MdExpandMore color="#fff"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6 style={{ color: "#fff", textAlign: "center" }}> Back End</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <>
             <Row>
                <Col className="language">Python</Col>
                <Col className="rating">95%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "95%"}}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  95%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">Java</Col>
                <Col className="rating">90%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "90%"}}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">Django</Col>
                <Col className="rating">85%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">PHP</Col>
                <Col className="rating">85%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "65%"}}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    65%
                  </div>
                </div>
             </>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fade>
      <Fade bottom>
      <Accordion style={{ backgroundColor: "#051937" }} >
        <AccordionSummary
          expandIcon={<MdExpandMore color="#fff" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h6 style={{ color: "#fff", textAlign: "center" }}> Database</h6>
        </AccordionSummary>
        <AccordionDetails style={{margin: "auto"}}>
          <Typography>
          <>
             <Row>
                <Col className="language">MYSQL</Col>
                <Col className="rating">95%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
             </>
             <br/> 
             <>
             <Row>
                <Col className="language">PostgreSQL</Col>
                <Col className="rating">75%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "75%"}}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
             </>
             <br/>
             <>
             <Row>
                <Col className="language">MongoDB</Col>
                <Col className="rating">60%</Col>
              </Row>
              
                <div class="progress" style={{width: "80%"}}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width: "60%"}}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
             </>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Fade>
    </div>
  );
};

export default Skills;
