import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import Tilt from "react-vanilla-tilt";
/**
 * @author
 * @function Myprojects
 **/

const Myprojects = (props) => {
  return (
    <div id="Myprojects" className="Myprojects">
      <h1>Projects i've build</h1>
      <br />

      <Row>
        {/* Card One */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "orange",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "orange" }}>
                Troy Ecommerce
              </h5>
              <p class="card-text">
                Online ecommerce system.The application loads products a MongoDB
                database and displays them. Users can select to display products
                in a single category. Users can click on any product to get more
                information including pricing, reviews and rating. Users can
                select items and add them to their shopping cart
              </p>
            </div>
          </div>
          </Tilt>
        </Col>
        {/* Card Two */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "#81D8F7",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#81D8F7" }}>
              COVID-19 Stat
              </h5>
              <p class="card-text">
              It is a dataset repository for COVID-19 cases in Africa.Real time COVID-19 Statistics at the tap of a button, retrieved using
               COVID-19 API. The tabular data files are located in the datasets folder (sample head as of Nov 24, 2020). The folder dataset/daily holds the daily updates for each country.
              
              </p>
            </div>
          </div>
          </Tilt>
        </Col>
        {/* Card Three */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "#FD2155",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#FD2155" }}>
              Netflix-Clone
              </h5>
              <p class="card-text">
              Netflix-Clone using react as the front end and TMDB API Key to retrive the list of movies using various
                api key categories. Mongodb as the database to store credential for user logging.
              </p>
            </div>
          </div>
          </Tilt>
        </Col>

        <br/>
        {/* Card Four */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "#76FF03",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#76FF03" }}>
               Music Application
              </h5>
              <p class="card-text">
              A cross platform music application using flutter and just audio and audio query
                packages from pb.dev to display the songs their respective artists and they can
                be played on the tap of a button.
              </p>
            </div>
          </div>
          </Tilt>
        </Col>
        {/* Card Five */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "#FD2155",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#FD2155" }}>
               Greenleaf Nursery Shop
              </h5>
              <p class="card-text">
              Online nursery shop for the sale of nursery plants. Users can click on any plant for instance grapes then they
                get more information including pricing, reviews and rating. Users can select items and add them to their shopping cart
              </p>
            </div>
          </div>
          </Tilt>
        </Col>
        {/* Card Five */}
        <Col>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <div
            class="card"
            style={{
              width: "18rem",
              // width: "33%",
              borderTopColor: "#81D8F7",
              color: "#fff",
              backgroundColor: "#091b36",
            }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#81D8F7" }}>
               Taxi App
              </h5>
              <p class="card-text">
              A flutter application for the booking of ride, similar to uber. It leverages firebase as the database and gelocator
               plugin which provides easy access to platform specific location services. It is still a work in progress and i hope to accomplish it ASAP.
              </p>
            </div>
          </div>
          </Tilt>
        </Col>
        {/* Card Six */}
       
      </Row>
   
      <center><button className="showMore">Show More</button></center>

      {/* <div class="readbtn">
       <a href="#">Read More</a>
     </div> */}

      <br />
      <br />
    </div>
  );
};

export default Myprojects;
