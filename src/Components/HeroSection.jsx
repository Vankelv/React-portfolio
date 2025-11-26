import React, { useState, useRef, useEffect } from "react";
import TexSlider from "./TextSlider.jsx";
import heroImage from "../images/van.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import ContactModal from "./ContactModal";
import "../styles/HeroSection.css";

const heroBadges = ["MERN Stack", "Product Strategy", "Cloud DevOps"];

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(60px)",
    config: { duration: 800 },
  });

  return (
    <section
      id="hero"
      className="relative  overflow-hidden bg-slate-950 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <animated.div
        ref={ref}
        style={heroSpring}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-center text-white lg:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-teal-300">
              Kelvin Vidzah · Creative Technologist
            </p>
            <h1 className="text-6xl font-extrabold leading-tight sm:text-5xl animate-charcter md:text-6xl">
              Dagbe neva
            </h1>
            <TexSlider />
            <p className="text-base text-left text-gray-300 sm:text-lg">
              I help startups, SMEs, and enterprise teams launch
              production-ready products that merge strong UI direction with
              scalable engineering.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <button
                onClick={handleShow}
                className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-teal-400 hover:text-teal-200"
              >
                Let's work together
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <span className="text-xs tracking-[0.4em] text-gray-400">
                Breaking with convention
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-200 lg:justify-start">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-72 w-72 rounded-[3rem] border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-2xl" />
              <img
                src={heroImage}
                alt="Kelvin portrait"
                className="relative z-10 h-full w-full rounded-[2.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </animated.div>

      <ContactModal open={showModal} onClose={handleClose} />
    </section>
  );
};

export default HeroSection;
