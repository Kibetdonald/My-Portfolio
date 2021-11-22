import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import Tilt from 'react-vanilla-tilt'
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
    
  
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
        <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Troy-Ecommerce</Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                Online ecommerce system.The application loads products a MongoDB database and displays them.
                Users can select to display products in a single category. Users can click on any product to
                get more information including pricing, reviews and rating. Users can select items and add them to their shopping cart
              </Card.Text>
              <hr />

              <div className="footerText">
                Mongodb, React, Express, Nodejs
              </div>

            </Card.Body>
          </Card>
          </Tilt>
       
        </Col>
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Smart-PC-S
              </Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
              Online ecommerce system for laptop sale. With mpesa payment intergration
                Users can select to display products in a single category. Users can click on any product to
                get more information including pricing, reviews and rating. Users can select items and add them to their shopping cart
              </Card.Text>
              <hr />

              <div className="footerText">
                PHP, Bootstrap, CSS, JavaScript,
              </div>

            </Card.Body>
          </Card>
          </Tilt>
        </Col>
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>COVID-19 Stats</Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
              It is a dataset repository for COVID-19 cases in Africa.Real time COVID-19 Statistics at the tap of a button, retrieved using
               COVID-19 API. The tabular data files are located in the datasets folder (sample head as of Nov 24, 2020). The folder dataset/daily holds the daily updates for each country.
              </Card.Text>
              <hr />

              <div className="footerText">
                Mongodb, React, Express, Nodejs
              </div>

            </Card.Body>
          </Card>
          </Tilt>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Netflix Clone</Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                Netflix-Clone using react as the front end and TMDB API Key to retrive the list of movies using various
                api key categories. Mongodb as the database to store credential for user logging.
              </Card.Text>
              <hr />

              <div className="footerText">
                Mongodb, React, Express, Nodejs
              </div>

            </Card.Body>
          </Card>
          </Tilt>
        </Col>
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Music Application</Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                A cross platform music application using flutter and just audio and audio query
                packages from pb.dev to display the songs their respective artists and they can
                be played on the tap of a button.
              </Card.Text>
              <hr />

              <div className="footerText">
                Flutter, Dart
              </div>

            </Card.Body>
          </Card>
          </Tilt>
        </Col>
        <Col sm>
        <Tilt style={{border: "none"}} options={{   max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1, }}>
          <Card className="cardGlass">
            <Card.Header >
              <div className="eternalLinks">
                <i className="fa fa-folder" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-external-link" aria-hidden="true"></i>

              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>Greenleaf Nursery Shop</Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                Online nursery shop for the sale of nursery plants. Users can click on any plant to
                get more information including pricing, reviews and rating. Users can select items and add them to their shopping cart
              </Card.Text>
              <hr />

              <div className="footerText">
                PHP, JavaScript, MYSQL
              </div>

            </Card.Body>
          </Card>
          </Tilt>
        </Col>
      </Row>
      <center>
        <button className="showMore">Show More</button>
      </center>
      <br /><br />

    </div>
  )

}

export default Myprojects