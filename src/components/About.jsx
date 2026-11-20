import { motion } from "framer-motion";
import me from "../assets/me-nobg.png";

const stats = [
  { value: "5+", label: "Projects shipped" },
  { value: "8+", label: "Core technologies" },
  { value: "100%", label: "Responsive builds" },
];

const availability = [
  { icon: "public", text: "Remote friendly — working with clients worldwide" },
  { icon: "schedule", text: "Flexible hours, GMT+1 timezone" },
  { icon: "task_alt", text: "Freelance, contract & long-term collaborations" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-16 top-1/4 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />
        <div className="absolute -right-10 bottom-0 h-[280px] w-[280px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16"
      >
        {/* Copy */}
        <div>
          <motion.p
            variants={item}
            className="flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400/90"
          >
            Who you&apos;ll work with
            <span className="h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-5 text-balance font-display-lg text-[32px] leading-[1.15] tracking-[-0.02em] font-[800] text-on-surface md:text-[40px]"
          >
            Hi, I&apos;m Zakaria —{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              the developer behind the code.
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-6 space-y-4 font-body-md text-[15.5px] leading-[1.75] text-slate-400"
          >
            <p>
              I&apos;m a full-stack developer focused on building modern, fast
              and reliable web applications. I work across the whole stack —
              from crafting pixel-perfect interfaces in React, Next.js,
              TypeScript and Tailwind CSS to building secure APIs and data
              layers with Node.js, Express, Supabase and MongoDB.
            </p>
            <p>
              Over the past few years I&apos;ve designed and shipped{" "}
              <span className="font-semibold text-on-surface">
                5+ production projects
              </span>{" "}
              — e-commerce stores, travel booking platforms, a university portal
              and a medical appointment system. That means I know what it takes
              to turn an idea into something real, maintainable and ready for
              users.
            </p>
            <p>
              Working with me, you get one person who handles design,
              development and deployment — with clear communication and no
              hand-offs.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-9 grid grid-cols-3 gap-4 border-y border-slate-800/80 py-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display-lg text-[26px] font-[800] leading-none tracking-[-0.02em] text-cyan-400 md:text-[30px]">
                  {stat.value}
                </p>
                <p className="mt-2 font-label-mono text-[10px] uppercase leading-tight tracking-[0.16em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded px-6 py-2.5 font-label-mono text-label-mono"
            >
              Work with me
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
            <a
              href="#work"
              className="btn-ghost inline-flex flex-1 items-center justify-center gap-2 rounded px-6 py-2.5 font-label-mono text-label-mono"
            >
              See my projects
            </a>
          </motion.div>
        </div>

        {/* Portrait + availability — sticky on desktop */}
        <motion.div
          variants={item}
          className="mx-auto w-full max-w-[420px] lg:sticky lg:top-32 lg:mx-0 lg:self-start"
        >
          <div className="group relative">
            {/* Frame glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-400/30 via-indigo-500/10 to-transparent opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950">
              {/* Subtle grid inside the frame */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:32px_32px]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent" />

              <img
                src={me}
                alt="Zakaria Hizzi — full-stack developer"
                className="relative aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Name plate */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display-lg text-[16px] font-[700] leading-none text-on-surface">
                  Zakaria Hizzi
                </p>
                <p className="mt-1.5 font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Full-stack developer
                </p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="glass mt-8 rounded-xl border border-slate-800 p-6">
            <h3 className="font-body-lg text-[16px] font-bold text-on-surface">
              Working together
            </h3>

            <ul className="mt-4 space-y-3">
              {availability.map((entry) => (
                <li
                  key={entry.text}
                  className="flex items-start gap-3 font-body-md text-[14px] leading-relaxed text-slate-400"
                >
                  <span className="material-symbols-outlined mt-px text-[18px] text-cyan-400/80">
                    {entry.icon}
                  </span>
                  {entry.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
