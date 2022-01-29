import React from "react";
import "./style.css";
import './responsive.css';
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
        <div class="form-floating mb-3">
                    <input name="name" type="text" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input name="email" type="email" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-3">
                    <input name="subject" type="text" class="form-control" id="floatingInput" required />
                    <label for="floatingInput">Phone Number</label>
                </div>


                <div class="form-floating">
                    <textarea class="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                    <label for="floatingInput">Comments</label>
                </div>
              </div>
        <button class="common-btn">Send Message</button>
      </div>
    
    </div>
  );
};

export default Contact;
