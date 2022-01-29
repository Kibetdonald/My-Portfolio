import React, {useRef, useEffect} from 'react'
import './style.css';
import './responsive.css';
import {Row, Col} from 'react-bootstrap';
import { TweenMax, Power3 } from "gsap";

/**
* @author
* @function About
**/

const About = (props) => {
  let avatar= useRef(null);
  let about = useRef(null);
  let header_about = useRef(null);
  useEffect(()=>{
    
    TweenMax.to(
      about,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
      
    )
    TweenMax.to(
      avatar,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
    TweenMax.to(
      header_about,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2
      }
      
    )
  
  

  },[])

  return(

    <div className="About" className="about">
      <h1 className='header_about'ref={el => {
              header_about = el

            }}  >About Me</h1>
      <Row>
      <Col xs={12} md={8} lg={6}>
        <span  ref={el => {
              about = el

            }} className="Aboutme" style={{fontSize: "18px",   color: "#E1E4E8"}}>My name is Donald Kibet and am skilled with both front-end and back-end development, technical support,
            database management and networking. Additionally, my abilities extend to critical thinking 
            and communication with proficiency in decision-making. My skill set is diverse and complementary,
             and I spend my spare time working on improving my IT skills.
        </span>
        </Col>
        <Col xs={12} md={6}  lg={6}>
     
       <img src="./assets/images/don.png" alt="Avatar" className="avatar"  ref={el => {
              avatar = el

            }}></img>
        </Col>
      </Row>
    </div>
   )

 }

export default About