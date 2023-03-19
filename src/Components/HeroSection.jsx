import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";
import TexSlider from "./TextSlider.js";

const HeroSection = () => {
 
  return (
    <section id="home">
      <div className="hero-section">
        <div className="hero-image">
          <img className="van" src={vanImage} alt="Van" />
        </div>
        <div className="hero-text">
          <h3 className="sub-text">
            Hi there! <span style={{ color: "#01BE96" }}>I'm</span>
          </h3>
          <h1 className="animate-charcter">Van Kelvin</h1>
          <div>
            <TexSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
