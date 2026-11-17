import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

const linkClass =
  "text-on-surface-variant font-medium hover:text-primary transition-colors duration-300";

const mobileMenu = {
  open: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const mobileItem = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center w-full px-[32px] py-4 max-w-[1280px] mx-auto">
        <a
          className="group flex items-center gap-3"
          href="#hero"
          aria-label="Zakaria Hizzi — home"
        >
          {/* Name lockup */}
          <span className="flex flex-col">
            <span className="font-display-lg text-[16px] font-[700] leading-none tracking-[-0.02em] text-on-surface transition-colors duration-300 sm:text-[17px]">
              Zakaria{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Hizzi
              </span>
            </span>
            <span className="mt-[6px] hidden font-label-mono text-[9px] uppercase leading-none tracking-[0.26em] text-slate-400 transition-colors duration-300 group-hover:text-cyan-400 sm:block">
              Full-Stack Developer
            </span>
          </span>
        </a>

        {/* Desktop links — Contact lives in the mobile menu */}
        <div className="hidden md:flex gap-[16px] items-center font-body-md text-body-md">
          {navLinks.map((link) => (
            <a key={link.href} className={linkClass} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden md:block btn-primary px-6 py-2 rounded font-label-mono text-label-mono uppercase tracking-widest hover:shadow-[0_0_15px_rgba(207,188,255,0.2)] transition-all"
          href="#contact"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="md:hidden text-primary p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            key={menuOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="material-symbols-outlined block"
          >
            {menuOpen ? "close" : "menu"}
          </motion.span>
        </button>
      </div>

      {/* Mobile Menu — animated open/close */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-surface-dim/95 backdrop-blur-xl border-b border-outline-variant/20"
          >
            <motion.div
              variants={mobileMenu}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-1 px-[32px] pb-6 font-body-md text-body-md"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={mobileItem}
                  className="rounded px-2 py-2.5 text-on-surface-variant font-medium transition-colors duration-300 hover:bg-slate-800/40 hover:text-primary"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                variants={mobileItem}
                className="btn-primary mt-3 px-6 py-2.5 rounded font-label-mono text-label-mono uppercase tracking-widest text-center hover:shadow-[0_0_15px_rgba(207,188,255,0.2)] transition-all"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
