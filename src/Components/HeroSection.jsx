import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";
import TexSlider from "./TextSlider.js";
import { Modal, Container, Row, Col, Button,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaLinkedin } from "react-icons/fa";


const HeroSection = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };
  return (
    <div id="hero">
      <section style={{ padding: '5%', height: '5%', marginTop: '2%' }}>
        <Row >
          <Col lg={6} md={6} >
            <img
              src={vanImage}
              alt="Van"
              className="img-fluid"
              style={{ width: '80%', height: 'auto' }}
            />
          </Col>
          <Col lg={6} md={6} className="d-flex justify-content-center">
            <div className="hero-text" >
              <h3 className="sub-text">Hi there! <span style={{ color: "#01BE96" }}>I'm</span></h3>
              <h1 className="animate-charcter">Van Kelvin</h1>
              <TexSlider />
              <div className="hero-btn">
                <Button variant="outline-dark" className="btn-collab" onClick={handleShow}>
                  Let's work together. <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
                </Button>
                <span style={{ marginLeft: '10px', color: 'white', fontFamily: 'Maven Pro', display: 'flex', alignItems: 'center', textAlign: 'center', height: '100%' }}>Breaking with Convention</span>
              </div>

            </div>
          </Col>
        </Row>
      </section>
      <Modal show={showModal} onHide={handleClose}  size="lg" fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6} className="modal-social">
              <h4>Get in Touch</h4>
              <p>Connect with us on social media:</p>
              <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <FaFacebook size={32} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={32} />
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="contact-form">
              <h4>Contact Form</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter message" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>

  );
};

export default HeroSection;
