import React, { useState } from "react";
import {
  FiCheckCircle,
  FiPackage,
  FiCloud,
  FiExternalLink,
  FiArrowRight,
} from "react-icons/fi";

const capabilities = [
  {
    icon: FiCheckCircle,
    title: "Full-Stack Product Engineering",
    description:
      "MERN builds, modular APIs, and clean architecture that stand up in production.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: FiPackage,
    title: "Marketplaces & ERP Workflows",
    description:
      "Multi-vendor commerce, logistics, e-learning, and invoicing flows tailored to operators.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps Mindset",
    description:
      "CI/CD, Firebase, Node services, and pragmatic automation to keep releases predictable.",
    color: "from-cyan-500 to-teal-500",
  },
];

const projectGroups = [
  {
    title: "Full-Stack Platforms",
    description:
      "Product builds where I owned front-to-back delivery, product decisions, and UX polish.",
    projects: [
      {
        name: "Vinetrix – Multi-Vendor Service Platform",
        role: "Lead Frontend Developer",
        tech: "MERN, Tailwind, API orchestration",
        outcomes: [
          "Customers discover and book artisans through API-driven tab navigation.",
          "Universal mobile sliders reduce friction for on-the-go users.",
          "Performance and scroll optimizations lifted engagement metrics.",
        ],
      },
      {
        name: "Transport & Logistics ERP",
        role: "System Developer",
        tech: "React, Node.js, REST, data visualization",
        outcomes: [
          "Dashboards track fuel, trips, customer visits, and gate logs in real time.",
          "Fleet teams capture data with location-aware forms, tables, and maps.",
        ],
      },
      {
        name: "Easy Invoice App",
        role: "Full-Stack Developer",
        tech: "React, Firebase, PDF generation",
        outcomes: [
          "Invoice creation, customer management, analytics, and PDF exports for SMEs.",
          "Documentation prepared for Turing portfolio submission.",
        ],
        link: "https://invoice.vinetrix.com/",
      },
      {
        name: "Kingura – E-Learning (Asante Twi)",
        role: "Full-Stack Developer",
        tech: "WordPress, custom JavaScript, LMS stack",
        outcomes: [
          "Video modules, assessments, and admin workflows for local language education.",
        ],
      },
    ],
  },
  {
    title: "Commerce & Service Websites",
    description:
      "Hybrid React/WordPress experiences designed for conversion and easy content ops.",
    projects: [
      {
        name: "Deedew Foods",
        role: "Developer",
        tech: "React, WordPress",
        outcomes: [
          "Menu management, ordering flows, and product catalogs for food delivery.",
        ],
        link: "https://deedewfoods.com/",
      },
      {
        name: "Shaq Express",
        role: "WordPress Developer",
        tech: "WordPress, custom themes",
        outcomes: [
          "On-brand, high-performing food delivery site with bespoke UI treatment.",
        ],
      },
      {
        name: "Multi-Vendor + Service Apps",
        role: "Product Engineer",
        tech: "React, Node",
        outcomes: [
          "Ongoing build + maintenance of Angi-style service platforms under Vinetrix.",
        ],
      },
    ],
  },
  {
    title: "Corporate & Organizational Sites",
    description:
      "Fast-turn, high-clarity websites for NGOs, associations, and corporate teams.",
    projects: [
      {
        name: "Nyansapo Website",
        role: "WordPress Developer",
        tech: "WordPress, custom JS",
        outcomes: [
          "Modern minimalist UI with multilingual-ready content blocks.",
        ],
      },
      {
        name: "Bolingo Consult",
        role: "WordPress Developer",
        outcomes: [
          "Responsive corporate presence with multilingual capability.",
        ],
      },
      {
        name: "African Diaspora Group Ghana",
        role: "WordPress Developer",
        tech: "WordPress",
        outcomes: [
          "Content management site designed for international engagement.",
        ],
        link: "https://ghana.africandiasporagroup.com/",
      },
    ],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold tracking-wider uppercase">
                Career Portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Product work across industries
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I help startups, SMEs, and enterprise teams launch
              production-ready multi-vendor marketplaces, logistics tools,
              invoicing platforms, and high-performing websites.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 p-8 hover:border-slate-600 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500`}
                >
                  <capability.icon className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {capability.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Categories Tabs */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                Project catalog
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Tap into the work stream that mirrors your roadmap.
              </h2>
            </div>
            <div className="w-full overflow-x-auto">
              <div className="flex w-max gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-2">
                {projectGroups.map((group, index) => (
                  <button
                    key={group.title}
                    onClick={() => setActiveTab(index)}
                    className={`whitespace-nowrap rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
                      activeTab === index
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow shadow-orange-500/30"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Overview
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                {projectGroups[activeTab].title}
              </h3>
              <p className="mt-3 text-sm text-gray-300">
                {projectGroups[activeTab].description}
              </p>
              <div className="mt-6 space-y-4 text-sm text-gray-200">
                {projectGroups[activeTab].projects
                  .slice(0, 3)
                  .map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-white/10 bg-black/40 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                        {project.role}
                      </p>
                      <p className="text-lg font-semibold">{project.name}</p>
                      <p className="text-xs text-gray-400">{project.tech}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-6">
              {projectGroups[activeTab].projects.map((project, index) => (
                <article
                  key={project.name}
                  className="group relative rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 transition hover:border-orange-500/50"
                >
                  <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-orange-500 to-pink-500 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.4em] text-orange-400">
                        {project.role}
                      </span>
                      <span className="text-xs text-gray-500">
                        #{index + 1} feature set
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300">
                        {project.name}
                      </h3>
                      {project.tech && (
                        <p className="font-mono text-xs text-gray-500">
                          {project.tech}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      {project.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-3">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
                          <p className="leading-relaxed">{outcome}</p>
                        </div>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-100"
                      >
                        View live project
                        <FiExternalLink className="transition group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 border border-slate-700/50 p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 animate-pulse" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to build something great?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how I can help bring your next project to life.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
              Get in touch
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
