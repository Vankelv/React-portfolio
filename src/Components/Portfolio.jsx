import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import queensImage from "../images/queens.webp";
import daImage from "../images/da.webp";
import skincareImage from "../images/skincare.webp";
import adgImage from "../images/adg.webp";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {

//animation
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
    <section ref={ref} id="portfolio">
  
      <Container ref={ref}>
      <animated.div style={heroSpring}>
        <Row className="justify-content-center">
          <h1 className="portfolio-h">Portfolio </h1>
          <span className="centered-text">
            Explore my showcase of website design and brand identity design
            projects. <br />
            See how I can help elevate your brand online with visually <br />
            appealing and effective digital platforms.
          </span>
          <Col md={6}>
            <div className=" text-white rounded">
              <div className="rounded p-3">
                <img
                  src={queensImage}
                  alt="Project 4"
                  className="mb-3"
                  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Queens Boutique </h3>
                <p className="mb-3">
                  Queen's Boutique website development project showcases my
                  ability to create a stylish and user-friendly e-commerce
                  platform that reflects the brand's values of quality,
                  affordability, and accessibility
                </p>
              </div>
              <Button
                variant="light"
                href="https://queensboutik.com/"
                target="blank"
                style={{ background: "none", border: "none",  boxShadow: "none", color: "white" }}
              >
                View Project
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className=" text-white rounded">
              <div className=" rounded p-3">
                <img
                  src={adgImage}
                  alt="Project 3"
                  className="mb-3"
                  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Africa Diaspora Group</h3>
                <p className="mb-3">
                  Africa Diaspora Group website project promotes African
                  relocation by providing accessible resources. The
                  user-friendly platform reflects the company's mission of
                  fostering growth within African communities.
                </p>
              </div>
              <Button
                variant="light"
                href="https://ghana.africandiasporagroup.com/"
                target="blank"
                style={{ background: "none", border: "none",  boxShadow: "none", color: "white" }}
              >
                View Project
              </Button>
            </div>
          </Col>

          <Col md={6} className="portfolio">
            <div className="text-white rounded">
              <div className=" rounded p-3">
                <img
                  src={daImage}
                  alt="Project 2"
                  className="mb-3"
                  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Da Engineering Branding</h3>
                <p className="mb-3">
                  Da Engineering logo design project showcases my ability to
                  create a modern and memorable visual identity that reflects
                  the construction industry's values of quality, reliability,
                  and innovation.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="portfolio">
            <div className=" text-white rounded">
              <div className="rounded p-3">
                <img
                  src={skincareImage}
                  alt="Project 2"
                  className="mb-3"
                  style={{ width: "100%", padding: "10px" }}
                />
                <h3 className="mb-3">Skin Care Loung Logo re-design</h3>
                <p className="mb-3">
                  Skincare Lounge rebranding project showcases my ability to
                  revitalize an established brand through a fresh and modern
                  visual identity that reflects the beauty industry's values of
                  quality, luxury, and innovation.
                </p>
              </div>
            </div>
          </Col>
          <Button
            variant="light"
            href="https://nextlinegh.com/works" target="blank" 
            style={{ background: "none", border: "none", color: "white", textDecoration: "Underline", boxShadow: "none", marginBottom: 77 }}
          >
            View All Projects <FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}} />
          </Button>
        </Row>
        </animated.div>
      </Container>
    </section>
  );
};

export default Portfolio;
