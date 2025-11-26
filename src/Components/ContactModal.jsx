import React, { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  FaEnvelopeOpen,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/" },
  { icon: FaInstagram, href: "https://www.instagram.com/" },
  { icon: FaWhatsapp, href: "https://www.instagram.com/" },
  { icon: FaEnvelopeOpen, href: "mailto:Vankelvin603@gmail.com" },
];

const ContactModal = ({ open, onClose }) => {
  const formRef = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_32w61qe",
        "template_kfdmijg",
        formRef.current,
        "7hGO1Bdpy1h5tn1dD"
      )
      .then(
        () => {
          setResult(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (!result) return undefined;
    const timer = setTimeout(() => setResult(false), 4000);
    return () => clearTimeout(timer);
  }, [result]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10">
      <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0d1119] p-6 text-white shadow-2xl sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
          aria-label="Close contact modal"
        >
          <FaTimes size={20} />
        </button>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-3xl font-bold">Let's get started</h2>
            <p className="text-sm text-gray-300">
              Share your project details and I’ll get back to you with next
              steps and timelines.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-300">
                Connect with me via social media
              </p>
              <div className="mt-4 flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-white transition hover:text-teal-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none"
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Tell me about your project"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-teal-400 hover:text-teal-100"
              >
                send
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <div className="h-6 text-center text-sm text-gray-300">
                {result ? (
                  <p>
                    Your message has been sent successfully. I will contact you
                    asap.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
