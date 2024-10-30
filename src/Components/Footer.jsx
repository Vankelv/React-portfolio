import React from "react";
import { Row, Col } from "react-bootstrap";
import LogoImage from "../images/Logo.png";
import "../styles/main.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [ref, inView] = useInView({
    threshold: 0.3, // When 50% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: { duration: 1000 },
  });

  return (
    <div ref={ref} className="footer p-5">
      <animated.div style={heroSpring}>
        <div className="mx-auto text-white flex flex-wrap items-center justify-center bg-[#101012] h-52 lg:w-4/5 rounded-lg shadow-md">
          <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
            <img src={LogoImage} alt="Van logo" className="mx-auto" />
          </div>
          <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
            <p>
              Call/WhatsApp:
              <a
                href="tel:+233202950603"
                className="text-orange-600 hover:underline"
              >
                +233202950603
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/3 text-center">
            <p>
              Email:
              <a
                href="mailto:Vankelvin603@gmail.com"
                className="text-orange-600  hover:underline"
              >
                Vankelvin603@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/your-linkedin-url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-600"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/your-instagram-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center flex items-center justify-center gap-2 text-white mt-5">
          <p >
            <span className="px-2"> &copy; {new Date().getFullYear()}</span>
           
            <a
              href="https://vinetrix.com"
              className="text-orange-600  hover:underline"
            >
              vinetrix.
            </a>
          </p>
          <p> All rights reserved.</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Footer;
