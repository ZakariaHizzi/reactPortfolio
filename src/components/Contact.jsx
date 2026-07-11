import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "287684cd-9861-4f67-8a59-c92469774cfb");

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
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-[32px] max-w-[1280px] mx-auto mb-[128px]"
      id="contact"
    >
      <div className="glass p-10 rounded-[0.25rem] border border-slate-800 max-w-2xl mx-auto">
        <h2 className="font-headline-md text-[32px] leading-[1.2] tracking-[-0.02em] font-[700] text-on-surface mb-2 text-center">
          Get In Touch
        </h2>
        <p className="font-body-md text-[16px] leading-[1.5] text-on-surface-variant mb-8 text-center">
          Have a project in mind? Let's build something great together.
        </p>
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-slate-900 border-0 border-b border-slate-700 text-on-surface font-body-md p-3 focus:ring-0 focus:border-cyan-400 transition-colors placeholder:text-slate-500 outline-none"
              id="name"
              name="Name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-slate-900 border-0 border-b border-slate-700 text-on-surface font-body-md p-3 focus:ring-0 focus:border-cyan-400 transition-colors placeholder:text-slate-500 outline-none"
              id="email"
              name="Email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-slate-900 border-0 border-b border-slate-700 text-on-surface font-body-md p-3 focus:ring-0 focus:border-cyan-400 transition-colors placeholder:text-slate-500 resize-none outline-none"
              id="message"
              name="Message"
              placeholder="Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input
            className="btn-primary w-full py-3 rounded font-label-mono text-label-mono mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
            type={"submit"}
            value={"Send Message"}
            disabled={!name.trim() || !email.trim() || !message.trim()}
          />
        </form>
        <div className="mt-10 flex justify-center gap-6">
          <a
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
          </a>
          <a
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">forum</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
