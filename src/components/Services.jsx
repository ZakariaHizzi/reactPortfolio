import { motion } from "framer-motion";

const services = [
  {
    icon: "terminal",
    title: "Full-Stack Web Development",
    description:
      "End-to-end solutions from DB to UI, engineered for scale and performance.",
  },
  {
    icon: "devices",
    title: "Responsive & Creative Design",
    description:
      "Mobile-first, visually stunning interfaces that engage and convert.",
  },
  {
    icon: "lightbulb",
    title: "Web Ideation",
    description:
      "Turning concepts into digital reality through strategic technical planning.",
  },
  {
    icon: "auto_fix",
    title: "Website Retouching",
    description:
      "Modernizing and optimizing existing legacy sites for the modern web.",
  },
  {
    icon: "api",
    title: "REST API Development",
    description:
      "Clean, secure and well-documented endpoints that connect your product to the world.",
  },
  {
    icon: "cloud_upload",
    title: "Deployment & Hosting",
    description:
      "Shipping to production with CI/CD pipelines, custom domains and monitoring on Vercel, Netlify or your own server.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-24 top-10 h-[320px] w-[320px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />
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
            What I do
          </p>

          <h2 className="mt-5 font-display-lg text-[34px] leading-[1.1] font-[800] tracking-[-0.025em] text-on-surface md:text-[42px]">
            Services
          </h2>

          <p className="mt-5 max-w-sm font-body-md text-[15.5px] leading-[1.75] text-slate-400">
            One developer covering the full journey — from the first sketch to
            the production deploy. Pick the piece you need, or hand me the whole
            thing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-label-mono text-label-mono"
            >
              Start a project
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
            <a
              href="#work"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-label-mono text-label-mono"
            >
              View my work
            </a>
          </div>
        </motion.div>

        {/* Service rows */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="border-y border-slate-800"
        >
          {services.map((service, index) => (
            <motion.a
              variants={item}
              key={service.title}
              href="#contact"
              className="group relative flex items-start gap-5 border-b border-slate-800 px-2 py-8 transition-colors duration-300 last:border-b-0 hover:bg-slate-900/50 md:gap-7 md:px-5"
            >
              {/* Left accent bar */}
              <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent transition-transform duration-300 group-hover:scale-y-100" />

              <span className="mt-1 font-label-mono text-[11px] tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-cyan-400">
                0{index + 1}
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[26px] text-cyan-400/80 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                      {service.icon}
                    </span>
                    <h3 className="font-body-lg text-[17px] font-bold leading-snug text-on-surface transition-colors duration-300 group-hover:text-cyan-400 md:text-[18px]">
                      {service.title}
                    </h3>
                  </div>

                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400">
                    arrow_outward
                  </span>
                </div>

                <p className="mt-2 max-w-lg font-body-md text-[14.5px] leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
