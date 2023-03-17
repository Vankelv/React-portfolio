import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer" style={{padding: '20px' }}>
      <Row className="mx-auto text-white align-items-center" 
      style={{ height:'200px',
       marginBottom: 0, 
       backgroundColor: '#101012', 
       width:'70%', 
       borderRadius: '10px', 
       boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', 
       }}>
        <Col xs={12} md={4} className="text-center">
          <img src="path/to/your/logo.png" alt="Your logo" />
        </Col>
        <Col xs={12} md={4} className="text-center">
          <p>
            Call/WhatsApp:
            {' '}
            <a href="tel:+233202950603">+233202950603</a>
          </p>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <p>
            Email:
            {' '}
            <a href="mailto:Vankelvin603@gmail.com">Vankelvin603@gmail.com</a>
          </p>
          <div className="social-media-links">
            <a href="https://www.linkedin.com/your-linkedin-url" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </Col>
      </Row>
      <div className="text-center" style={{ padding: '10px',color:'white', marginTop: '20px' }}>
        &copy; {currentYear} Your Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
