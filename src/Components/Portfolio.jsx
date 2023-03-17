import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TiBrush } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import munaImage from "../images/muna.webp";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <h1 className="tagline-2"> Portfolio </h1>
          <p className="centered-text">Some text here.</p>
          <Col md={6}>
            <div className=" text-white rounded">
              <div className="bg-warning rounded p-3">
                <img
                  src={munaImage}
                  alt="Project 4"
                  className="mb-3"  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Project 4</h3>
                <p className="mb-3">Short description of project 4.</p>
                
              </div>
              <Button  variant="light" href="#" style={{background: 'none', border: 'none', color: 'white'  }}>
                View Project
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className=" text-white rounded">
              <div className="bg-warning rounded p-3">
                <img
                  src={munaImage}
                  alt="Project 4"
                  className="mb-3"  style={{ width: "100%", padding: "10px" }}
                />
                 <h3 className="mb-3">Project 3</h3>
                <p className="mb-3">Short description of project 3.</p>
              </div>
              <Button  variant="light" href="#" style={{background: 'none', border: 'none', color: 'white'  }}>
                View Project
              </Button>
            </div>
          </Col>
        
          <Col md={6} className="portfolio">
            <div className="text-white rounded">
              <div className="bg-secondary rounded p-3">
                <img
                  src={munaImage}
                  alt="Project 2"
                  className="mb-3"  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Project 2</h3>
                <p className="mb-3">Short description of project 2.</p>
               
              </div>
              <Button  variant="light" href="#" style={{background: 'none', border: 'none', color: 'white'  }}>
                View Project
              </Button>
            </div>
          </Col>
          <Col md={6} className="portfolio">
            <div className=" text-white rounded">
              <div className="bg-secondary rounded p-3">
                <img
                  src={munaImage}
                  alt="Project 2"
                  className="mb-3"  style={{ width: "100%", padding: "10px" }}
                />
               <h3 className="mb-3">Project 1</h3>
              <p className="mb-3">Short description of project 1.</p>
             
              </div>
              <Button  variant="light" href="#" style={{background: 'none', border: 'none', color: 'white'  }}>
                View Project
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
