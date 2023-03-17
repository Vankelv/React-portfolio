import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import vanImage from "../images/van.png";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  //   const texts = [
  //     {
  //       text: "I'm a creative Web designer",
  //       gradient: "linear-gradient(to right, orange, green)",
  //     },
  //     {
  //       text: "Graphic designer",
  //       gradient: "linear-gradient(to right, blue, purple)",
  //     },
  //     {
  //       text: "IT support",
  //       gradient: "linear-gradient(to right, red, yellow)",
  //     },
  //   ];

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setTextIndex((textIndex + 2) % texts.length);
  //     }, 1000);
  //     return () => clearInterval(intervalId);
  //   }, [textIndex, texts.length]);

  //   const currentText = texts[textIndex];

  return (
    <div className="hero-section">
      <div className="hero-image">
        <img className="van" src={vanImage} alt="Van" />
      </div>
      <div className="hero-text">
        <h1 class="animate-charcter">Van Kelvin</h1>

        {/* <p>{currentText.text}</p>
        <span
          className="text-gradient"
          style={{ backgroundImage: currentText.gradient }}
        /> */}
        <div class="message">
          <div class="word1">close</div>
          <div class="word2">code</div>
          <div class="word3">creating</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
