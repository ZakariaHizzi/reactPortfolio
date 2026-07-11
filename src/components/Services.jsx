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
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="px-[32px] max-w-[1280px] mx-auto mb-[128px]" id="services">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="font-headline-md text-[32px] leading-[1.2] tracking-[-0.02em] font-[700] text-primary mb-12 flex items-center gap-4"
      >
        <span className="w-8 h-px bg-primary" />
        Services
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="glass p-8 rounded-[0.25rem] border border-slate-800 hover:border-cyan-400 transition-colors duration-300 glow-box group"
          >
            <span className="material-symbols-outlined text-[32px] text-cyan-400 mb-6 block group-hover:scale-110 transition-transform">
              {service.icon}
            </span>
            <h3 className="font-body-lg text-[18px] leading-[1.6] text-on-surface font-bold mb-2">
              {service.title}
            </h3>
            <p className="font-body-md text-[16px] leading-[1.5] text-on-surface-variant">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
