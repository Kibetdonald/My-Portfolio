import React from 'react';
import './style.css';
import { Col, Tabs, Tab } from 'react-bootstrap'

/**
* @author
* @function Skills
**/

const Skills = (props) => {
  return (
    <div id="Skills" className="Skills">
      
      <h1>Skills</h1>
      <Tabs style={{width: "70%",backgroungColor:"#0A2540", margin: "auto"}} defaultActiveKey="Languages" className="justify-content-center" default>
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

      </Tabs>


    </div>
  )

}

export default Skills