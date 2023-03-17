import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  return (
    <div className="hero-section">
      <div className="hero-image">
        <img className="van" src={vanImage} alt="Van" />
      </div>
      <div className="hero-text">
        <h5
          class="header_sub_title wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
        >
          Hello I'm
        </h5>
        <h1 class="animate-charcter">Van Kelvin</h1>
        <div class="string">
          <h1 class="greeting en">Hello World!</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
