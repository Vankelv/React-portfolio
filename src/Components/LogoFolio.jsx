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
    <section  id="portfolio" className="py-16 ">
      <div className="container mx-auto px-6 md:px-12">
    <div className="marquee-container overflow-hidden bg-gray-200 lg:rounded-md shadow-sm p-4">
      <div className="text-center flex flex-col text-6xl font-bold logofo border border-solid py-2">
        <span className="text-center">Logofolio</span>
        <span className="text-center text-gray-500 text-base py-2">
          Explore my showcase of professional logo designs projects.
        </span>
      </div>
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
    </div>
    </section>
  );
};

export default Logofolio;
