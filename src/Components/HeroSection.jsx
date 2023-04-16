import React, { useState, useRef, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";
import TexSlider from "./TextSlider.js";
import { Modal, Card, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelopeOpen, FaInstagram, FaTimes, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Result = () => {
  return (
    <p>Your message has been sent successfully. I will contact you asap</p>
  )
}

const HeroSection = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [result, showResult] = useState(false);
  //email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_32w61qe',
      'template_kfdmijg',
      form.current, '7hGO1Bdpy1h5tn1dD')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false)
  }, 4000)
  //animation
  const [ref, inView] = useInView({
    threshold: 0.5, // When 50% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: { duration: 1000 },
  });

  return (
    <div id="hero" style={{overflowX:'hidden'}}>
      <section id="hero" ref={ref} style={{ padding: '5%', height: '5%', marginTop: '2%' }}>
        <animated.div style={heroSpring}>
          <Row className="justify-content-center" >
            {/* <Col lg={4} >
              <img
                src={vanImage}
                alt="Van"
                className="img-fluid"
                style={{ height: 'auto' }}
              />
            </Col> */}
            <Col lg={8} className="d-flex justify-content-center">
              <div className="hero-text justify-content-center" >
                <h3 className="sub-text">Hi there! <span style={{ color: "#01BE96" }}>I'm</span></h3>
                <h1 className="animate-charcter">Van Kelvin</h1>
                <TexSlider />
                <div className="hero-btn" style={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="outline-dark" className="btn-collab" onClick={handleShow} style={{ marginRight: '10px' }}>
                    Let's work together. <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
                  </Button>
                  <span style={{ color: 'white', fontFamily: 'Maven Pro' }}>Breaking with Convention</span>
                </div>


              </div>
            </Col>
          </Row>
        </animated.div>

      </section>
      <Modal show={showModal} onHide={handleClose} size="lg" fullscreen>
        <Modal.Header >
          <Button variant="link" onClick={handleClose} className="text-white">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="modal-contents">
            <h1 className="form-header">Lets get started <br />with your project</h1>
            <Col xs={12} md={6} >
              <div className="justify-content-center">
                <Card className="bouncing-card">
                  <Card.Body>
                    <Card.Title className="gradient-text">
                      <h1>Get in Touch</h1>
                    </Card.Title>
                    <p className="no-gradient">What's next?
                      Kindly fill in the required fields below to progress to the next page.
                    </p>
                    Connect with me via social media
                    <div className="d-flex justify-content-center">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="social-icon" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagram className="social-icon" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="social-icon" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaEnvelopeOpen className="social-icon" />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} className="contact-form text-white">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="form-group" controlId="formBasicName">
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter name" name="user_name" required />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicEmail">
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control type="email" placeholder="Enter email" name="user_email" required />
                </Form.Group>

                <Form.Group className="form-group" controlId="formBasicMessage">
                  {/* <Form.Label>Message</Form.Label> */}
                  <Form.Control as="textarea" rows={3} placeholder="Enter message" name="message" required />
                </Form.Group>
                <Button variant="outline-dark" className="btn-collab btn-send" type="submit">
                  send<FontAwesomeIcon icon={faArrowRight} />
                </Button>
                <div className="row" style={{ marginTop: 30 }}>{
                  result ? <Result /> : null}</div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>

  );
};

export default HeroSection;
