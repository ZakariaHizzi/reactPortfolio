import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center w-full px-[32px] py-4 max-w-[1280px] mx-auto">
        <a
          className="font-display-lg text-headline-md tracking-tighter text-primary"
          href="#"
        >
          H.Z
        </a>
        <div className="hidden md:flex gap-[16px] items-center font-body-md text-body-md">
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
            href="#stack"
          >
            Stack
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          className="hidden md:block btn-primary px-6 py-2 rounded font-label-mono text-label-mono uppercase tracking-widest hover:shadow-[0_0_15px_rgba(207,188,255,0.2)] transition-all"
          href="#contact"
        >
          Let's Chat
        </a>
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-dim/95 backdrop-blur-xl border-b border-outline-variant/20 px-[32px] pb-6">
          <div className="flex flex-col gap-4 font-body-md text-body-md">
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              href="#work"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              href="#services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              href="#stack"
              onClick={() => setMenuOpen(false)}
            >
              Stack
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              className="btn-primary px-6 py-2 rounded font-label-mono text-label-mono uppercase tracking-widest text-center hover:shadow-[0_0_15px_rgba(207,188,255,0.2)] transition-all"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's Chat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
