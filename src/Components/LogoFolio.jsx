import React from "react";
import "../styles/main.css";

const logos = [
  "/imgs/portfolio/logos/logos1.png",
  "/imgs/portfolio/logos/logos2.png",
  "/imgs/portfolio/logos/logos3.png",
  "/imgs/portfolio/logos/logos4.png",
  "/imgs/portfolio/logos/logos5.png",
  "/imgs/portfolio/logos/logos6.png",
  "/imgs/portfolio/logos/logos7.png",
  "/imgs/portfolio/logos/logos8.png",
  "/imgs/portfolio/logos/logos9.png",
  "/imgs/portfolio/logos/logos10.png",
  "/imgs/portfolio/logos/logos11.png",
  "/imgs/portfolio/logos/logos12.png",
  "/imgs/portfolio/logos/logos13.png",
];

const Logofolio = () => {
  return (
    <div className="marquee-container mx-auto max-w-7xl overflow-hidden bg-gray-200 rounded-md shadow-sm p-4">
      <h1 className="text-center text-6xl font-bold logofo border border-solid py-2">Logofolio</h1>
      <div className="marquee-content flex items-center gap-20 animate-marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-32 h-auto object-contain " // Add Tailwind filter classes
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`clone-${index}`}
            src={logo}
            alt={`Logo Clone ${index + 1}`}
            className="w-32 h-auto object-contain " // Add Tailwind filter classes
          />
        ))}
      </div>
    </div>
  );
};

export default Logofolio;
