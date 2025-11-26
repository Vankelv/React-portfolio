import React from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/main.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import {
  FiTarget,
  FiRepeat,
  FiTool,
  FiMonitor,
  FiActivity,
} from "react-icons/fi";

const stats = [
  { label: "Years shipping", value: "5+ yrs", detail: "MERN & product builds" },
  { label: "Industries served", value: "8+", detail: "Logistics to edtech" },
  { label: "Team impact", value: "Lead & IC", detail: "Startups + enterprise" },
];

const buildRhythms = [
  {
    icon: FiTarget,
    title: "Strategy Sprint",
    window: "Week 0 → 1",
    description:
      "Translate business KPIs into user journeys, success metrics, and a technical runway we can ship against.",
  },
  {
    icon: FiRepeat,
    title: "Build & Learn Loop",
    window: "Weeks 2 → n",
    description:
      "Short build cycles with instrumentation, QA gates, and stakeholder demos so decisions stay evidence based.",
  },
  {
    icon: FiTool,
    title: "Enablement & Handoff",
    window: "Every release",
    description:
      "Documentation, playbooks, and lightweight DevOps automation that let internal teams own the stack confidently.",
  },
];

const careerHighlights = [
  {
    title: "Vinetrix – Multi-Vendor Service Platform",
    role: "Lead Frontend Developer",
    tech: "MERN, Tailwind, REST, Responsive UI",
    bullets: [
      "Shipped Angi-style marketplace connecting customers to artisans and service crews.",
      "Streamed navigation + content via API-driven tabs with universal mobile sliders.",
      "Reduced scroll debt, boosted perceived performance, and kept the UI consistent across breakpoints.",
    ],
  },
  {
    title: "Transport & Logistics ERP",
    role: "System Developer",
    tech: "React, Node.js, REST APIs, Data viz",
    bullets: [
      "Built fuel, trip, and gate logs with geolocation-aware data entry.",
      "Implemented dashboards for instant operational visibility.",
      "Crafted accessible tables and forms for fleet and customer teams.",
    ],
  },
  {
    title: "Easy Invoice App",
    role: "Full-Stack Developer",
    tech: "React, Firebase, PDF services",
    bullets: [
      "Created invoice generation, customer management, and analytics workflows.",
      "Added export-ready PDFs and documentation for portfolio submissions.",
    ],
  },
  {
    title: "Kingura E-Learning (Asante Twi)",
    role: "Full-Stack Developer",
    tech: "WordPress, custom JS, LMS plugins",
    bullets: [
      "Integrated video courses, assessments, and content management for local language learning.",
    ],
  },
];

const complementarySkills = [
  {
    icon: FiMonitor,
    title: "Creative Direction",
    description:
      "Brand identity + logo systems that keep products cohesive from the first pixel.",
  },
  {
    icon: FiActivity,
    title: "ISO Lead Implementer",
    description:
      "Process optimization mindset that keeps delivery predictable and compliant.",
  },
];

const differentiators = [
  "Battle-tested MERN builds with observability baked in.",
  "Operator-friendly UX for logistics, marketplaces, and SaaS.",
  "Strong product judgment from shipping for startups & enterprise.",
  "Design + engineering blend that keeps interfaces on-brand.",
];

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    rootMargin: "-50px 0px",
    triggerOnce: true,
  });

  const heroSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
    config: { duration: 1000 },
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <animated.div style={heroSpring} className="space-y-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
                Kelvin · Software Developer & Creative Technologist
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
                I design, build, and ship scalable product systems for teams
                that can’t afford slow releases.
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                From Angi-style marketplaces to logistics ERPs and invoicing
                SaaS, I lead full-stack delivery with a blend of architecture,
                DevOps empathy, and sharp UI instincts. I care about build
                quality, business context, and how polished software moves the
                needle for operators.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200"
                  >
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1js_7BwKafVqRwhyXX9OxptuGYw4IUc38/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-orange-500/20 transition hover:text-orange-200 hover:scale-105"
                >
                  <FaDownload /> Download CV
                </a>
                <a
                  href="mailto:Vankelvin603@gmail.com"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-orange-400 hover:text-orange-200"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                  Delivery metrics
                </p>
                <div className="mt-4 grid gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-400">
                          {stat.label}
                        </p>
                        <p className="text-sm text-gray-400">{stat.detail}</p>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6 shadow-lg backdrop-blur">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-300">
                  Currently building at
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Vinetrix · Product & Platform Engineering
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  Leading full-stack delivery for service marketplaces, custom
                  logistics tooling, and internal business platforms.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["MERN", "Tailwind", "Node APIs", "Firebase", "DevOps"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/30 px-3 py-1 text-xs tracking-wider text-white"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-3 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                  Build Rhythm
                </p>
                <h3 className="mt-2 text-3xl font-semibold">
                  A repeatable operating system for shipping measurable
                  outcomes.
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Instead of one-off deliverables, I run a cadence that keeps
                stakeholders aligned, engineers unblocked, and insights flowing
                back into the roadmap.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {buildRhythms.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-orange-400/60"
                >
                  <item.icon className="text-3xl text-orange-400" />
                  <div className="mt-5 space-y-2">
                    <p className="text-xs uppercase tracking-[0.5em] text-gray-400">
                      {item.window}
                    </p>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/40 p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                  Career Portfolio Highlights
                </p>
                <h3 className="mt-2 text-3xl font-semibold">
                  Product work across marketplaces, logistics, and edtech.
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Every build shipped with KPIs in mind—conversion, retention, and
                operations efficiency.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {careerHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                        {item.role}
                      </p>
                      <h4 className="mt-1 text-2xl font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.tech}</p>
                    </div>
                    <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-wider text-gray-300">
                      #{index + 1}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-200">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-red-500/10 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Complementary Edge
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Creative polish + ISO-backed process rigor.
              </h3>
              <p className="mt-3 text-sm text-gray-200">
                Beyond engineering, I partner on brand narratives, experience
                systems, and delivery frameworks that keep teams aligned.
              </p>
              <div className="mt-6 grid gap-4">
                {complementarySkills.map((skill) => (
                  <article
                    key={skill.title}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <skill.icon className="text-2xl text-orange-300" />
                    <div>
                      <h4 className="text-lg font-semibold">{skill.title}</h4>
                      <p className="text-sm text-gray-300">
                        {skill.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
                How I collaborate
              </p>
              <div className="mt-6 space-y-5 text-sm text-gray-200">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Product runway
                  </p>
                  <p className="text-base text-white">
                    Discovery → architecture → delivery, staying close to
                    business KPIs the entire time.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Tooling
                  </p>
                  <p className="text-base text-white">
                    Git-based workflows, CI/CD, telemetry dashboards, and
                    playbooks to hand off to internal teams.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Engagements
                  </p>
                  <p className="text-base text-white">
                    Fractional product engineering, lead IC, or embedded pod
                    across startups, SMEs, and enterprise pilots.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </animated.div>
      </div>
    </section>
  );
};

export default AboutPage;
