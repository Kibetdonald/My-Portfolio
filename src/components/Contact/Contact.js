import React from "react";
import "./style.css";
/**
 * @author
 * @function Contact
 **/

const Contact = (props) => {
  return (
    <div>
      
      <div className="Contact" id="Contact">
        <h1>Get in touch</h1>
        {/* <span className="spanText">
      I'm now seeking for a job in a fast-paced, stable industry, 
      and please don't hesitate to contact me if you have any questions
       or simply want to say hello.
      </span> */}
      </div>
      {/* <button className="sayHello">Say Hello</button> */}
      <div
        class="card" 
        style={{
          // width: "18rem",
          // width: "33%",
          width:"50%",
          margin: "auto",
          // borderTopColor: "orange",
          color: "#fff",
          backgroundColor: "#091b36",
        }}
      >
        <div class="card-body">
          <div class="row g-3">
            <div class="col">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="example@gmail.com"
                aria-label="email address"
              />
            </div>
            <div class="col">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="John Doe"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
         
         
        </div>
        <button class="common-btn">Send Message</button>
      </div>
    
    </div>
  );
};

export default Contact;
