import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/main.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar");

    const checkScroll = () => {
      skillBars.forEach((skillBar) => {
        const barTop = skillBar.getBoundingClientRect().top;
        const barBottom = skillBar.getBoundingClientRect().bottom;
        const barHeight = skillBar.getBoundingClientRect().height;

        if (barTop < window.innerHeight - barHeight / 2 && barBottom > 0) {
          skillBar.classList.add("animate");
        } else {
          skillBar.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  //animation
  const [ref, inView] = useInView({
    threshold: 0.7, // When 50% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: { duration: 1000 },
  });

  return (
    <div className="about-page" id="about">
      <Container ref={ref} style={{ marginBottom: "8%" }}>
        <animated.div style={heroSpring}>
          <Row>
            <Col md={4}>
              <div className="about text-white">
                <div
                  className="justify-content-center card-body"
                  style={{ padding: "5%" }}
                >
                  <h2>About Me</h2>
                  <p>
                    Hi, I'm a frontend developer skilled in HTML, CSS,
                    JavaScript, and React JS, with a strong background in brand
                    identity design. With over three years of experience, I've
                    also served as a Chief Information Security Officer CISO,
                    leading successful ISO certifications and implementing
                    Information Security Management Systems ISMS. From creating
                    dynamic web applications to designing brand identities, my
                    portfolio showcases a comprehensive skill set.
                  </p>
                  {/* <div className="skill-item">
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

                
                </div> */}
                  <div className="about-buttons">
                    <a
                      href="https://drive.google.com/file/d/1ez8zo6uRlPoGWk-GOuqRQeU-_aDDUIp3/view?usp=sharing"
                    >
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
            </Col>
          </Row>
        </animated.div>
      </Container>
    </div>
  );
};

export default AboutPage;
