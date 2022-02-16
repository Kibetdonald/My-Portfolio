import React from "react";
import "./style.css";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import "./responsive.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdExpandMore } from "react-icons/md";

/**
 * @author
 * @function Skills
 **/

const Skills = (props) => {
  return (
    <div className="Skills" className="Skills">
      <h1>Skills</h1>
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

      {/* <Tabs style={{width: "70%",backgroungColor:"#0A2540", margin: "auto"}} defaultActiveKey="Languages" className="justify-content-center" default>
        <Tab eventKey="Languages" title="Languages">
         <ul style={{margin: "auto", width:"30%", fontSize: "18px"}}>
          <li>Python</li>
           <li>PHP</li>
           <li>HTML</li>
           <li>CSS</li>
           <li>JS</li>
           <li>Java</li>
           
    
         </ul>
        </Tab>
        <Tab eventKey="Framework" title="Framework">
        <ul style={{margin: "auto", width:"0%", fontSize: "18px"}}>
           <li>Flutter</li>
           <li>ReactJS</li>
           <li>NodeJS</li>
           <li>ExpressJS</li>
           <li>Laravel</li>
           <li>Django</li>

    
         </ul>
        </Tab>
        <Tab eventKey="Tools" className="title-text" title="Tools">
          
            <Col>
            <ul style={{marginLeft: "65%",  fontSize: "18px"}}>
           <li>Codepen</li>
           <li>Azure</li>
           <li>VSCode</li>
           <li>Android Studio</li>
           <li>Linux terminal</li>
           <li>Docker</li>
           <li>Github</li>
          <li>AWS</li>
           
    
         </ul>

            </Col>
          
        </Tab>

      </Tabs> */}
    </div>
  );
};

export default Skills;
