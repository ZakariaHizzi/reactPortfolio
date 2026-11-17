import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const highlights = [
  {
    title: "Pixel-perfect UI",
    description: "Interfaces that match the design down to the last pixel.",
  },
  {
    title: "High-performance apps",
    description: "Fast loads, smooth interactions and lean bundles.",
  },
  {
    title: "Modern architecture",
    description: "Clean, scalable code built to grow with your product.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto mb-[128px] flex min-h-[calc(100svh-8rem)] w-full max-w-[1280px] flex-col justify-center overflow-hidden px-[32px] py-12"
    >
      {/* Background: glows + masked grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 left-[18%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-0 top-10 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:56px_56px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent 78%)",
          }}
        />
      </div>

      <div className="flex w-full flex-col items-center gap-14 lg:-translate-y-4 lg:flex-row lg:items-center lg:gap-12">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full text-center lg:w-[56%] lg:text-left"
        >
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3.5 py-1.5 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="font-label-mono text-[11px] uppercase tracking-[0.2em] text-slate-300">
                Available for new projects
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-balance font-display-lg text-[40px] leading-[1.05] tracking-[-0.03em] font-[800] text-on-surface md:text-[58px] lg:text-[64px]"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              fast, scalable
            </span>{" "}
            &amp; beautiful web experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-pretty font-body-lg text-[17px] leading-[1.7] text-slate-400 lg:mx-0 lg:text-[18px]"
          >
            Full-Stack Developer specializing in high-performance web
            applications, modern architectures, and pixel-perfect UI
            engineering.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#work"
              className="group btn-primary inline-flex items-center justify-center gap-2 rounded px-8 py-3 font-label-mono text-label-mono"
            >
              View My Work
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded px-8 py-3 font-label-mono text-label-mono"
            >
              Hire Me
              <span className="material-symbols-outlined text-[18px]">
                north_east
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Visual: three focus phrases */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[44%]"
        >
          <div className="mx-auto w-full max-w-[420px]">
            <motion.p
              variants={item}
              className="mb-5 flex items-center gap-3 font-label-mono text-[10px] uppercase tracking-[0.24em] text-slate-500"
            >
              What I focus on
              <span className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
            </motion.p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_12px_32px_-16px_rgba(34,211,238,0.45)]"
                >
                  {/* Accent bar + hover glow */}
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 font-label-mono text-[11px] tracking-widest text-cyan-400/80">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display-lg text-[17px] font-[700] leading-snug tracking-[-0.01em] text-on-surface">
                        {highlight.title}
                      </h3>
                      <p className="mt-1.5 font-body-md text-[13.5px] leading-relaxed text-slate-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
