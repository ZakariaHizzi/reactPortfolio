import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import css from "../imgicons/css3.svg";
import js from "../imgicons/javascript.svg";
import ts from "../imgicons/typescript.svg";
import react from "../imgicons/react.svg";
import next from "../imgicons/nextjs-icon-svgrepo-com.svg";
import tailwind from "../imgicons/tailwindcss.svg";
import sb from "../imgicons/icons8-supabase.svg";
import node from "../imgicons/Node.js_logo.svg";
import ep from "../imgicons/express-js-icon.svg";

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "styling", label: "Styling" },
  { id: "backend", label: "Backend" },
];

const techStack = [
  { icon: next, label: "Nextjs", color: "text-orange-500", category: "frontend" },
  { icon: css, label: "CSS3", color: "text-blue-500", category: "styling" },
  { icon: js, label: "JavaScript", color: "text-yellow-400", category: "frontend" },
  { icon: ts, label: "TypeScript", color: "text-[#3178c6]", category: "frontend" },
  { icon: react, label: "React", color: "text-cyan-400", category: "frontend" },
  { icon: tailwind, label: "Tailwind", color: "text-cyan-300", category: "styling" },
  { icon: sb, label: "Supabase", color: "text-emerald-500", category: "backend" },
  { icon: node, label: "nodeJS", color: "text-emerald-500", category: "backend" },
  { icon: ep, label: "expressJS", color: "text-emerald-500", category: "backend" },
];

const categoryLabel = {
  frontend: "Frontend",
  styling: "Styling",
  backend: "Backend",
};

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleTech =
    activeFilter === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === activeFilter);

  return (
    <section
      id="stack"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 top-16 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400/90">
            <span className="h-px w-8 bg-cyan-400/60" />
            Tools of the trade
          </p>

          <h2 className="mt-5 font-display-lg text-[34px] leading-[1.1] font-[800] tracking-[-0.025em] text-on-surface md:text-[42px]">
            My Arsenal
          </h2>

          <p className="mt-5 max-w-sm font-body-md text-[15.5px] leading-[1.75] text-slate-400">
            The stack I reach for every day — filter it by where it sits in the
            build.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:gap-2"
            role="group"
            aria-label="Filter technologies"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count =
                filter.id === "all"
                  ? techStack.length
                  : techStack.filter((tech) => tech.category === filter.id)
                      .length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`group flex cursor-pointer items-center justify-between gap-6 rounded-lg border px-4 py-2.5 font-label-mono text-[12px] transition-all duration-300 lg:w-full ${
                    isActive
                      ? "border-cyan-400/50 bg-cyan-400/[0.08] text-cyan-300"
                      : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-cyan-400" : "bg-slate-600"
                      }`}
                    />
                    {filter.label}
                  </span>
                  <span
                    className={`tabular-nums text-[10px] ${
                      isActive ? "text-cyan-400/70" : "text-slate-600"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            Showing {String(visibleTech.length).padStart(2, "0")} of{" "}
            {String(techStack.length).padStart(2, "0")}
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleTech.map((tech) => (
              <motion.div
                layout
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-900/60 hover:shadow-[0_16px_36px_-22px_rgba(34,211,238,0.5)]"
              >
                <span className="absolute left-3 top-2.5 font-label-mono text-[9px] uppercase tracking-[0.16em] text-slate-600 transition-colors duration-300 group-hover:text-cyan-400/70">
                  {categoryLabel[tech.category]}
                </span>

                <img
                  src={tech.icon}
                  alt={tech.label}
                  className={`mt-2 h-11 w-11 object-contain ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                />
                <span className="font-label-mono text-[12px] text-slate-300 transition-colors duration-300 group-hover:text-on-surface">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
