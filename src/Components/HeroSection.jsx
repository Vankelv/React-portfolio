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
        <h3 className="sub-text">Hello <span style={{color:'#01BE96'}}>I am</span></h3>
        <h1 className="animate-charcter">Van Kelvin</h1>
        <div className="string">
          <h2 >Relax i'll add a tailored details about me here</h2>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
