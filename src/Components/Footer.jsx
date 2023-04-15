import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LogoImage from '../images/Logo.png';
import '../styles/main.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [ref, inView] = useInView({
    threshold: 0.3, // When 50% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: { duration: 1000 },
  });
  
  return (
    <div className="footer" ref={ref} style={{padding: '20px' }}>
      <animated.div style={heroSpring}>
      <Row className="mx-auto text-white align-items-center" 
      style={{ height:'200px',
       marginBottom: 0, 
       backgroundColor: '#101012', 
       width:'70%', 
       borderRadius: '10px', 
       boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', 
       }}>
        <Col xs={12}  className=" col-sm-4 text-center">
          <img src={LogoImage} alt="Van logo" />
        </Col>
        <Col xs={12} className=" col-sm-4 text-center">
          <p>
            Call/WhatsApp:
            {' '}
            <a href="tel:+233202950603">+233202950603</a>
          </p>
        </Col>
        <Col xs={12}  className=" col-sm-4 text-center">
          <p>
            Email:
            {' '}
            <a href="mailto:Vankelvin603@gmail.com">Vankelvin603@gmail.com</a>
          </p>
          <span className="social-media-links">
            <a href="https://www.linkedin.com/your-linkedin-url" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </span>
        </Col>
      </Row>
      <div className="text-center" style={{ padding: '10px',color:'white', marginTop: '20px' }}>
        &copy; {currentYear} <a href='https://nextlinegh.com'>Nextline Gh.</a>  All rights reserved.
      </div>
      </animated.div>
    </div>
  );
};

export default Footer;
