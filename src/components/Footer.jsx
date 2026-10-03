import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const GITHUB_URL = "https://github.com/ZakariaHizzi";
const LINKEDIN_URL = "https://www.linkedin.com/in/zakaria-hizzi-3234a9297/";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800 bg-[#020617]">
      {/* Top gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-cyan-400/[0.06] to-transparent pointer-events-none" />

      {/* Soft background glows */}
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-[1280px] mx-auto px-[32px] pt-16 pb-8"
      >
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-baseline gap-1 font-display-lg text-[28px] font-[800] tracking-tighter text-on-surface"
            >
              H.Z<span className="text-cyan-400">.</span>
            </a>
            <p className="mt-4 max-w-sm font-body-md text-[15px] leading-[1.6] text-slate-400">
              Full-Stack Developer building fast, scalable &amp; beautiful web
              experiences.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              >
                <FaGithub className="text-[20px]" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              >
                <FaLinkedin className="text-[20px]" />
              </a>
              <span className="ml-2 hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-label-mono text-[12px] text-slate-400 sm:inline-flex">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Open to work
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:justify-self-center">
            <h3 className="font-label-mono text-[12px] uppercase tracking-[0.2em] text-slate-500">
              Sitemap
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-body-md text-[15px] text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:justify-self-end md:text-right">
            <h3 className="font-label-mono text-[12px] uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </h3>
            <p className="mt-5 font-body-md text-[15px] leading-[1.6] text-slate-400 md:ml-auto md:max-w-[240px]">
              Have a project in mind? Let&apos;s build something great together.
            </p>
            <a
              href="#contact"
              className="btn-primary mt-6 inline-flex items-center justify-center gap-2 rounded px-6 py-2.5 font-label-mono text-[14px] uppercase tracking-widest"
            >
              Let&apos;s Chat
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-800/80 pt-7 sm:flex-row">
          <p className="font-label-mono text-[13px] text-slate-500">
            &copy; {year} H.Z. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
          >
            <FiArrowUp className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
