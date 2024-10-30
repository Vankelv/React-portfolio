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
              <div className="font-Maven bg-gray-900 rounded-lg text-white">
                <div
                  className="justify-content-center card-body"
                  style={{ padding: "5%" }}
                >
                  <h2 className="font-Maven">About Me</h2>
                  <p>
                    With over three years of experience in full-stack
                    development using the MERN stack and over six years of
                    expertise in brand identity design, specifically in
                    professional logo design, I bring a holistic approach to
                    digital solutions. I graduated from the Accra Institute of
                    Technology with a BSc in Information Technology and have
                    also led successful ISO certification projects, ensuring
                    secure and compliant systems for businesses.
                  </p>

                  <div className="about-buttons flex flex-row items-center">
                    <a href="https://drive.google.com/file/d/1ez8zo6uRlPoGWk-GOuqRQeU-_aDDUIp3/view?usp=sharing">
                      <button className="flex flex-row items-center gap-2 bg-orange-600 p-2 rounded hover:text-white">
                        <FaDownload /> Download My CV
                      </button>
                    </a>
                    <a href="mailto:Vankelvin603@gmail.com">
                      <button className=" rounded p-2">Contact Me</button>
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
