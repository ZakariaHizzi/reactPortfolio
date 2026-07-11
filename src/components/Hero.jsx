import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-[500px] flex flex-col justify-center px-[32px] max-w-[1280px] mx-auto mb-[128px] relative"
      id="hero"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at right center, #22d3ee 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 w-full md:w-2/3">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em] md:tracking-[-0.04em] font-[800] text-on-surface mb-6 glow-text"
        >
          Building Fast, Scalable, &amp; Beautiful Web Experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant mb-10 max-w-2xl"
        >
          Freelance Full-Stack Developer specializing in high-performance web
          applications, modern architectures, and pixel-perfect UI engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            className="btn-primary px-8 py-3 rounded font-label-mono text-label-mono text-center flex items-center justify-center gap-2"
            href="#work"
          >
            View My Work
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
          <a
            className="btn-ghost px-8 py-3 rounded font-label-mono text-label-mono text-center"
            href="#contact"
          >
            Let's Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
