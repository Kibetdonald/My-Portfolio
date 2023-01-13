import React, { useState } from "react";
import { projects } from "../../data/projects";
import { Row, Col, Card } from "react-bootstrap";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import Tilt from "react-vanilla-tilt";
import Fade from "react-reveal";
/**
 * @author
 * @function Myprojects
 **/

const Myprojects = (props) => {
  const [data, setData] = useState(projects);
  const [visible, setVisible] = useState(6);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div id="Myprojects" className="Myprojects">
      <Fade bottom>
        <h1>Projects i've build</h1>
      </Fade>
      <br />

      <Row>
        {/* Card One */}
        {data.slice(0, visible).map((item) => (
          <div key={item.id}>
            <Col>
              <Fade bottom>
                <Tilt
                  style={{ border: "none" }}
                  options={{ max: 25, speed: 400, glare: true, "max-glare": 1 }}
                >
                  <div
                    class="card"
                    style={{
                      width: "16rem",
                      borderTopColor:
                        item.category === "Front End" ? "#FD2155" : "#81D8F7",
                      color: "#fff",
                      backgroundColor: "#091b36",
                    }}
                  >
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{
                          color:
                            item.category === "Front End"
                              ? "#FD2155"
                              : "#81D8F7",
                        }}
                      >
                        {item.title}
                      </h5>
                     <span>Stack:</span> <span className="stack">{item.Stack}</span>
                     <div style={{height: "10px"}}/>
                      <p class="card-text">{item.description}</p>
                    </div>
                  </div>
                </Tilt>
              </Fade>
            </Col>
          </div>
        ))}

        {/* Card Six */}
      </Row>
      <Fade bottom>
        <center>
          <button className="showMore" onClick={showMore}>
            Show More
          </button>
        </center>
      </Fade>

      <br />
      <br />
    </div>
  );
};

export default Myprojects;
