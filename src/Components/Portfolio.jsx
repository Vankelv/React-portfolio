import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  // Animation setup
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 800 },
  });

  // All Project Data
  const projects = [
    {
      title: "ALCA Association",
      description:
        "Promotes collaboration between language service providers across Africa with a user-friendly, informative platform.",
      link: "https://alca-association.org/",
      bgImage: "/imgs/portfolio/Web/alca.jpg",
    },
    {
      title: "African Diaspora Group",
      description:
        "Aims to foster relocation by offering resources and opportunities for Africans in the diaspora.",
      link: "https://ghana.africandiasporagroup.com/",
      bgImage: "/imgs/portfolio/Web/diaspora.jpeg",
    },
    {
      title: "Ty Kente Tours",
      description:
        "Tourism-focused website that highlights authentic cultural experiences and travel packages in Ghana.",
      link: "https://tykentetours.com/",
      bgImage: "/imgs/portfolio/Web/tykente.jpeg",
    },
    {
      title: "Localization Africa",
      description:
        "Specializes in localization services to bridge cultural and linguistic gaps across Africa.",
      link: "https://localizationafrica.com/",
      bgImage: "/imgs/portfolio/Web/local.jpeg",
    },
    {
      title: "Missionary Projects Across The World",
      description:
        "Supports missionary projects by providing information and connection platforms for volunteers.",
      link: "https://gmavenue.org/",
      bgImage: "/imgs/portfolio/Web/gmau.jpeg",
    },
    {
      title: "Easy Invoice",
      description:
        "A user-friendly invoicing platform designed for small businesses.",
      link: "https://invoice.vinetrix.com/",
      bgImage: "/imgs/portfolio/Web/easy-invoice.jpeg",
    },
    {
      title: "Deedew Foods",
      description:
        "An eCommerce platform for Deedew Foods, offering local food products online.",
      link: "https://deedewfoods.com/",
      bgImage: "/imgs/portfolio/Web/deedew.jpeg",
    },
    {
      title: "Atiwah Guest House",
      description:
        "Guest house located in Ashongma Estate, Accra, providing comfort and hospitality.",
      link: "https://atiwaguesthouse.com/",
      bgImage: "/imgs/portfolio/Web/atiwah.jpeg",
    },
    {
      title: "African Languages Conference",
      description:
        "Conference platform dedicated to the preservation and promotion of African languages.",
      link: "https://africanlanguagesconf.org/",
      bgImage: "/imgs/portfolio/Web/african-languages.jpeg",
    },
  ];

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages and current items to display
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section ref={ref} id="portfolio" className="py-16 ">
      <div className="container mx-auto px-6 md:px-12">
        <animated.div style={heroSpring}>
          <h1 className="text-4xl font-bold text-center text-white mb-6">
           Webfolio
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Explore my showcase of web design projects and discover how I can
            help elevate your brand online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center p-6 rounded-lg shadow-lg h-80 flex flex-col justify-end transition-transform transform hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2 w-48 rounded hover:underline flex items-center"
                    style={{ minWidth: "50px" }}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-gray-700 text-white rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-600"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-gray-700 text-white rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-600"
              }`}
            >
              Next
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Portfolio;
