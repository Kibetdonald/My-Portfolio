import React from 'react'
import './style.css'
/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
   <center>
      <div className="Contact" id="Contact">
      <h1>Get in touch</h1>
      <span className="spanText">
      I'm now seeking for a job in a fast-paced, stable industry, 
      and please don't hesitate to contact me if you have any questions
       or simply want to say hello.
      </span>
      
    </div>  
    <button className="sayHello">Say Hello</button>
   </center>
   )

 }

export default Contact