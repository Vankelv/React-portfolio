import React, { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import "../styles/main.css";
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar');

    const checkScroll = () => {
      skillBars.forEach(skillBar => {
        const barTop = skillBar.getBoundingClientRect().top;
        const barBottom = skillBar.getBoundingClientRect().bottom;
        const barHeight = skillBar.getBoundingClientRect().height;

        if (barTop < window.innerHeight - barHeight / 2 && barBottom > 0) {
          skillBar.classList.add('animate');
        } else {
          skillBar.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="about-page" id='about'>
      <Container style={{ marginBottom: '8%' }}>
        <Row>
          <Col md={4}>
            <div className="about text-white">
              <div className="justify-content-center card-body" style={{ padding: '5%' }}>
                <h2>About Me</h2>
                <p>
                  Hi, I'm a frontend developer with expertise in HTML, CSS, JavaScript, and React JS. I'm also a brand identity designer and IT helpdesk support with over 3 years of experience in these roles.
                </p>
                <div className="skill-item">
                  <span className="skill-title">WordPress</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ '--progress-width': '91%' }}>
                      <span className="skill-percent">91%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-title">HTML and CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ '--progress-width': '80%' }}>
                      <span className="skill-percent">80%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-title">React/JS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ '--progress-width': '55%' }}>
                      <span className="skill-percent">55%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-title">Brand Identity Designs</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ '--progress-width': '91%' }}>
                      <span className="skill-percent">95%</span>
                    </div>
                  </div>

                  <div className="about-buttons">
                    <a href={process.env.PUBLIC_URL + '/pdf/Kelvin.pdf'} download>
                      <button className="btn about">
                        <FaDownload /> Download My CV
                      </button>
                    </a>


                    <a href="mailto:Vankelvin603@gmail.com">
                      <button className="btn about contact">Contact Me</button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
