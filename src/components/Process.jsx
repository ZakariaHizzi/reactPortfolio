import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Align on goals, users, and success metrics. No code until we agree on the outcome.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "System design, DB schema, API contracts, and tech decisions documented upfront — no surprises later.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative sprints with working software demos every two weeks. Real product, not status slide decks.",
  },
  {
    number: "04",
    title: "Review & QA",
    description:
      "Unit tests, integration tests, performance benchmarks, and security review before anything ships.",
  },
  {
    number: "05",
    title: "Ship & Support",
    description:
      "CI/CD pipelines, monitoring setup, and ongoing support so your product stays healthy post-launch.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 top-1/3 h-[340px] w-[340px] rounded-full bg-indigo-500/[0.07] blur-[130px]" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Sticky intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400/90">
            <span className="h-px w-8 bg-cyan-400/60" />
            How I work
          </p>

          <h2 className="mt-5 text-balance font-display-lg text-[34px] leading-[1.1] font-[800] tracking-[-0.025em] text-on-surface md:text-[42px]">
            A Process Built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>

          <p className="mt-5 max-w-sm font-body-md text-[15.5px] leading-[1.75] text-slate-400">
            A structured, transparent roadmap from initial discovery to
            production release. Scroll down to follow the journey.
          </p>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2">
            <span className="material-symbols-outlined text-[16px] text-cyan-400/80">
              route
            </span>
            <span className="font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
              5 steps · discovery to launch
            </span>
          </div>

          <a
            href="#contact"
            className="btn-ghost mt-6 inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-label-mono text-label-mono"
          >
            Book a discovery call
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </a>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative space-y-2"
        >
          {/* Vertical line */}
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-cyan-400/50 via-slate-800 to-transparent"
          />

          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={item}
              className="group relative flex items-start gap-5 md:gap-7"
            >
              {/* Number node */}
              <span className="relative z-10 mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-950 font-label-mono text-[12px] tracking-widest text-slate-400 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:text-cyan-300 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.2)]">
                {step.number}
              </span>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-transparent px-1 py-1 pb-8 transition-all duration-300 group-hover:border-slate-800 group-hover:bg-slate-900/40 group-hover:px-5">
                <h3 className="font-display-lg text-[19px] font-[700] leading-snug tracking-[-0.01em] text-on-surface transition-colors duration-300 group-hover:text-cyan-300 md:text-[20px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl font-body-md text-[14.5px] leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
