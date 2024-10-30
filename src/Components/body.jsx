import { useRef } from "react";
import "../styles/main.css";
import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import { TiBrush } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import Porfolio from "./Portfolio";
import AboutPage from "./About";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Logofolio from "./LogoFolio";

function Body() {
  const BodyRef = useRef();
  //animation
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
    <div>
      <section id="services" className="py-16 lg:max-w-[99rem] mx-auto">
        <div ref={ref} className="mx-auto px-0">
          <animated.div style={heroSpring}>
            <div className="flex flex-col text-white items-center p-6">
              <span className="text-center text-lg mb-2">
                Helping You Create a Strong Digital Presence, from custom
                software and web development to Branding and IT Support
              </span>
              <h1 className="text-3xl font-bold text-center mb-8">
                Boosting Your Online Presence
              </h1>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-6 w-full">
                {/* Card 1: Software Development */}
                <div className="flex flex-row items-center bg-[#1E1E2C] text-white rounded-lg shadow-md p-4 lg:w-1/3">
                  <FaCode
                    size={90}
                    className="text-[#FF097F] bg-[#361C29] p-6 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Software Development
                    </h3>
                  </div>
                </div>

                {/* Card 2: Corporate Branding */}
                <div className="flex flex-row items-center bg-[#1E1E2C] text-white rounded-lg shadow-md p-4 lg:w-1/3">
                  <TiBrush
                    size={90}
                    className="text-[#7BD388] bg-[#1C2C1F] p-6 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Corporate Branding
                    </h3>
                  </div>
                </div>

                {/* Card 3: IT Support */}
                <div className="flex flex-row items-center bg-[#1E1E2C] text-white rounded-lg shadow-md p-4 lg:w-1/3">
                  <FiSettings
                    size={90}
                    className="text-[#7979F1] bg-[#252543] p-6 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">IT Support</h3>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </section>

      <AboutPage />
      <div className="">
        <Logofolio />
      </div>
      <Porfolio />
    </div>
  );
}

export default Body;
