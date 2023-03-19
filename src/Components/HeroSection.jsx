import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";
import TexSlider from "./TextSlider.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const HeroSection = () => {

  return (
    <div>
      <section style={{ padding: '5%', height: '5%', marginTop: '2%' }}>
        <Row >
          <Col xs={12} md={6} >
            {/* Hero section image */}
            <img
              src={vanImage}
              alt="Van"
              className="img-fluid"
              style={{ width: '80%', height: 'auto' }}
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            {/* Subtext, Heading, and p text */}
            <div className="hero-text" >
              <h3 className="sub-text">Hi there! <span style={{ color: "#01BE96" }}>I'm</span></h3>
              <h1 className="animate-charcter">Van Kelvin</h1>
              <TexSlider />
              <div style={{ display: 'flex', alignItems: 'center', width: '500px', marginTop: '5%' }}>
                <Button variant="outline-dark" className="btn-collab">
                  Let's work together. <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
                </Button>
                <span style={{ marginLeft: '10px', color: 'white', fontFamily: 'Maven Pro', display: 'flex', alignItems: 'center', textAlign: 'center', height: '100%' }}>Breaking with Convention</span>
              </div>

            </div>
          </Col>
        </Row>
      </section>
    </div>

  );
};

export default HeroSection;
