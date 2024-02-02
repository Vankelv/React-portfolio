import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TiBrush } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import HeroSection from "./HeroSection";
import Porfolio from "./Portfolio";
import AboutPage from "./About";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Body() {
  const BodyRef = useRef();
  //animation
  const [ref, inView] = useInView({
    threshold: 0.3, // When 50% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: { duration: 1000 },
  });
  return (
    <div>
      <section id="what-i-do">
        <Container ref={ref} style={{ marginBottom: "8%" }}>
          <animated.div style={heroSpring}>
            <Row>
              <span className="centered-text">
                Helping You Create a Strong Digital Presence, from Branding to
                IT Support
              </span>
              <h1 className="tagline-2">Boosting Your Online Presence</h1>
              <Col lg={4} className="col-sm-12">
                <div className="card  text-white rounded">
                  <div className="card-body">
                    <div className="d-flex  ">
                      <BsGlobe2
                        size={90}
                        style={{
                          color: "#FF097F",
                          backgroundColor: "#361C29",
                          borderRadius: "50%",
                          padding: "20px",
                        }}
                      />
                    </div>
                    <h1 className="card-title">Website Dev</h1>
                    <ul className="items-list">
                      <li>Custom website design</li>
                      <li>Responsive design</li>
                      <li>Website development</li>
                      <li>Website maintenance</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="col-sm-12 services">
                <div className="card text-white rounded">
                  <div className="card-body">
                    <div className="d-flex   text-left">
                      <div className="mobile-align-left">
                        {" "}
                        <TiBrush
                          size={90}
                          style={{
                            color: "#7BD388",
                            backgroundColor: "#1C2C1F",
                            borderRadius: "50%",
                            padding: "20px",
                          }}
                        />
                      </div>
                    </div>
                    <h1 className="card-title"> Branding</h1>
                    <ul className="items-list">
                      <li>Logo design</li>
                      <li>Business card design</li>
                      <li>Creative social media posts</li>
                      <li>Brand guidelines</li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="col-sm-12 services">
                <div className="card text-white rounded">
                  <div className="card-body">
                    <div className="d-flex  ">
                      <FiSettings
                        size={90}
                        style={{
                          color: "#7979F1",
                          backgroundColor: "#252543",
                          borderRadius: "50%",
                          padding: "20px",
                          padding: "25px",
                        }}
                      />
                    </div>
                    <h1 className="card-title"> IT Support</h1>
                    <ul className="items-list">
                      <li>Computer troubleshooting</li>
                      <li>Software installation</li>
                      <li>Network setup and configuration</li>
                      <li>Data backup and recovery</li>
                      <li>
                        Implementation and management of Information Security
                        Management System (ISMS)
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </animated.div>
        </Container>
      </section>
      <AboutPage />
      <Porfolio />
    </div>
  );
}

export default Body;
