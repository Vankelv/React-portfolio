import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  return (
    <section id="home">
    <div className="hero-section">
      <div className="hero-image">
        <img className="van" src={vanImage} alt="Van" />
      </div>
      <div className="hero-text">
        <h3 className="sub-text">Hello I'm</h3>
        <h1 class="animate-charcter">Van Kelvin</h1>
        <div class="string">
          <h1 class="greeting en">Hello World!</h1>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
