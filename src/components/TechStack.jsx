import css from "../imgicons/css3.svg";
import js from "../imgicons/javascript.svg";
import react from "../imgicons/react.svg";
import strapi from "../assets/strapi-icon-svgrepo-com.svg";
import next from "../imgicons/nextjs-icon-svgrepo-com.svg";
import tailwind from "../imgicons/tailwindcss.svg";
import sb from "../imgicons/icons8-supabase.svg";
const techStack = [
  { icon: next, label: "Nextjs", color: "text-orange-500" },
  { icon: css, label: "CSS3", color: "text-blue-500" },
  { icon: js, label: "JavaScript", color: "text-yellow-400" },
  { icon: react, label: "React", color: "text-cyan-400" },
  { icon: tailwind, label: "Tailwind", color: "text-cyan-300" },
  { icon: sb, label: "Supabase", color: "text-emerald-500" },
];

export default function TechStack() {
  return (
    <section className="px-[32px] max-w-[1280px] mx-auto mb-[128px]" id="stack">
      <h2 className="font-headline-md text-[32px] leading-[1.2] tracking-[-0.02em] font-[700] text-primary mb-12 flex items-center gap-4 justify-end">
        My Arsenal
        <span className="w-8 h-px bg-primary" />
      </h2>
      <div className="flex flex-wrap justify-center gap-6 glass p-10 rounded-[0.25rem] border border-slate-800">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-slate-800/50 transition-colors cursor-default"
          >
            <img
              src={tech.icon}
              alt={tech.label}
              className={`w-12 h-12 object-contain ${tech.color}`}
            />
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
