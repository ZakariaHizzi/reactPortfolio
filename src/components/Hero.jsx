import { motion } from "framer-motion";
import meImg from "../assets/me-nobg.png";

export default function Hero() {
  return (
    <section
      className="min-h-[500px] flex flex-col justify-center px-[32px] max-w-[1280px] mx-auto mb-[128px] relative"
      id="hero"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
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
            className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Full-Stack Developer specializing in high-performance web
            applications, modern architectures, and pixel-perfect UI
            engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end shrink-0"
        >
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-[32px] opacity-40 blur-2xl pointer-events-none" />
            {/* Card frame */}
            <div className="relative rounded-[24px] p-[1px] ">
              <div className="relative rounded-[23px] overflow-hidden  ">
                <img
                  src={meImg}
                  alt="Portrait"
                  className="w-full aspect-[4/4] object-cover object-top"
                />
                {/* subtle bottom gradient for blend */}
                <div className="absolute inset-x-0 bottom-0 h-24 " />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 glass border border-cyan-400/20 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="font-label-mono text-[13px] text-on-surface">
                Open to work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
