import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const GITHUB_URL = "https://github.com/ZakariaHizzi";
const LINKEDIN_URL = "https://www.linkedin.com/in/zakaria-hizzi-3234a9297/";
// TODO: replace with your Upwork profile URL
const UPWORK_URL = "https://www.upwork.com/freelancers/~01d81806a929df40e1";

const projectTypes = ["Landing page", "Web app", "E-commerce", "Redesign"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputClass =
  "w-full rounded border border-slate-800 bg-slate-900/70 px-4 py-3 font-body-md text-[15px] text-on-surface outline-none transition-colors placeholder:text-slate-500 hover:border-slate-700 focus:border-cyan-400 focus:bg-slate-900";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [projectType, setProjectType] = useState("Web app");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "287684cd-9861-4f67-8a59-c92469774cfb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("The message was not sent");
      }
    } catch {
      toast.error("The message was not sent");
    } finally {
      setSending(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.08] blur-[120px]" />
        <div className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full bg-indigo-500/[0.08] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl"
      >
        {/* Top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: pitch */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:pr-10"
          >
            <div>
              <motion.p
                variants={item}
                className="flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400/90"
              >
                <span className="h-px w-8 bg-cyan-400/60" />
                Let&apos;s talk
              </motion.p>

              <motion.h2
                variants={item}
                className="mt-5 text-balance font-display-lg text-[34px] leading-[1.1] font-[800] tracking-[-0.025em] text-on-surface md:text-[42px]"
              >
                Let&apos;s build{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  something together
                </span>
                .
              </motion.h2>

              <motion.p
                variants={item}
                className="mt-5 max-w-md font-body-md text-[15.5px] leading-[1.75] text-slate-400"
              >
                Tell me about your idea, your deadline and what&apos;s not
                working right now. I&apos;ll get back to you within 24 hours
                with a clear plan and next steps — no forms buried in a pile.
              </motion.p>
            </div>

            {/* Direct channels */}
            <motion.div variants={item} className="space-y-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/60"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors group-hover:text-cyan-400">
                    <FaGithub className="text-[17px]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      GitHub
                    </span>
                    <span className="mt-1 font-body-md text-[14px] text-on-surface">
                      ZakariaHizzi
                    </span>
                  </span>
                </span>
                <FiArrowUpRight className="text-[18px] text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/60"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors group-hover:text-cyan-400">
                    <FaLinkedin className="text-[17px]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      LinkedIn
                    </span>
                    <span className="mt-1 font-body-md text-[14px] text-on-surface">
                      Zakaria Hizzi
                    </span>
                  </span>
                </span>
                <FiArrowUpRight className="text-[18px] text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
              </a>

              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/60"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors group-hover:text-cyan-400">
                    <FaUpwork className="text-[17px]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-label-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Upwork
                    </span>
                    <span className="mt-1 font-body-md text-[14px] text-on-surface">
                      Hire me on Upwork
                    </span>
                  </span>
                </span>
                <FiArrowUpRight className="text-[18px] text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
              </a>

              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-label-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <div className="border-t border-slate-800 bg-slate-950/50 p-8 md:p-12 lg:border-l lg:border-t-0">
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <p className="font-label-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Project details
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block font-label-mono text-[10px] uppercase tracking-[0.16em] text-slate-400"
                    htmlFor="name"
                  >
                    Your name
                  </label>
                  <input
                    className={inputClass}
                    id="name"
                    name="Name"
                    placeholder="Zakaria"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block font-label-mono text-[10px] uppercase tracking-[0.16em] text-slate-400"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={inputClass}
                    id="email"
                    name="Email"
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <span className="mb-2 block font-label-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  What do you need?
                </span>
                <input type="hidden" name="Project type" value={projectType} />
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const active = projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        aria-pressed={active}
                        className={`rounded-full border px-3.5 py-1.5 font-label-mono text-[12px] transition-all duration-300 ${
                          active
                            ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.15)]"
                            : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-on-surface"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block font-label-mono text-[10px] uppercase tracking-[0.16em] text-slate-400"
                  htmlFor="message"
                >
                  Project brief
                </label>
                <textarea
                  className={`${inputClass} resize-none`}
                  id="message"
                  name="Message"
                  placeholder="A few lines about your idea, goals and timeline..."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={
                  !name.trim() || !email.trim() || !message.trim() || sending
                }
                className="btn-primary group mt-1 inline-flex w-full items-center justify-center gap-2 rounded px-8 py-3.5 font-label-mono text-label-mono uppercase tracking-widest disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? "Sending..." : "Send message"}
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </button>

              <p className="text-center font-label-mono text-[11px] text-slate-500">
                Usually replies within 24 hours · GMT+1
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
