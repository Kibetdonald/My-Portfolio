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
         <ul style={{margin: "auto", width:"30%"}}>
           <li>PHP</li>
           <li>HTML</li>
           <li>CSS</li>
           <li>JS</li>
           <li>Java</li>
           
    
         </ul>
        </Tab>
        <Tab eventKey="Framework" title="Framework">
        <ul style={{margin: "auto", width:"0%"}}>
           <li>ReactJS</li>
           <li>NodeJS</li>
           <li>ExpressJS</li>
           <li>PHP</li>
           <li>PHP</li>

    
         </ul>
        </Tab>
        <Tab eventKey="Tools" title="Tools">
          
            <Col>
            <ul style={{marginLeft: "65%"}}>
           <li>Codepen</li>
           <li>Azure</li>
           <li>VSCode</li>
           <li>Linux terminal</li>
           <li>Github</li>
           
    
         </ul>

            </Col>
          
        </Tab>

      </Tabs>


    </div>
  )

}

export default Skills