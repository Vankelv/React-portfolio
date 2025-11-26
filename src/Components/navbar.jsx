import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImage from "../images/Logo.png";
import ContactModal from "./ContactModal";

const navItems = [
  { label: "Home", to: "hero", duration: 500 },
  { label: "About", to: "about", duration: 500 },
  { label: "My Works", to: "portfolio", duration: 400 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#231557] via-[#ff1361] to-[#ef6d35] shadow-lg"
            : "bg-slate-950/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 text-white">
            {/* Logo + tagline */}
            <div className="flex items-center gap-3">
              <img
                src={LogoImage}
                alt="Kelvin logo"
                className="h-9 w-9 rounded-lg border border-white/20 object-contain"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold">Kelvin Vidzah</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-200">
                  Frontend · Branding · IT Support
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.to
                      ? "bg-white text-[#231557] shadow-lg"
                      : "text-gray-100 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => setContactOpen(true)}
                className="px-6 py-2 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#231557] transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 backdrop-blur-lg shadow-lg">
            {navItems.map((item, index) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                  activeSection === item.to
                    ? "bg-white text-[#231557] shadow-lg"
                    : "text-gray-100 hover:bg-white/10"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                setContactOpen(true);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center px-4 py-3 mt-4 rounded-xl border border-white/30 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#231557] transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
