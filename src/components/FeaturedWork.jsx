import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../works/portfolio1.PNG";
import img2 from "../works/portfolio2.PNG";
import img4 from "../works/portfolio4.PNG";
import img6 from "../works/portfolio6.PNG";
import imgUniversity from "../works/UniversityShotsCover.png";

const projects = [
  {
    id: 1,
    img: img1,
    description:
      "A modern e-commerce web application built with React 19, featuring product browsing, shopping cart management, and user authentication.",
    title: "Ecommerce Website",
    github: "https://github.com/ZakariaHizzi/react-ecommerce-website",
    live: "https://ecommerce-website-60.netlify.app/",
    tags: ["#ReactJS", "#Tailwind"],
  },
  {
    id: 2,
    img: img2,
    description:
      "A premium travel destination discovery and booking platform built with Next.js, Supabase, and Tailwind CSS.",
    title: "Wanderlust",
    github: "https://github.com/ZakariaHizzi/reacttraveling",
    live: "https://reacttraveling.vercel.app/",
    tags: ["#NextJS", "#Supabase", "#Tailwind"],
  },

  {
    id: 4,
    img: img4,
    description:
      "A futuristic cyberpunk-themed restaurant website with immersive visual effects, online menu browsing, and table reservation functionality.",
    title: "NEON BISTRO",
    github: "https://github.com/ZakariaHizzi/fullstackrestarant",
    live: "https://fullstackrestarant.vercel.app/",
    tags: ["#ReactJS", "#Tailwind", "#NodeJS"],
  },

  {
    id: 5,
    img: imgUniversity,
    description:
      "A full-stack university platform combining a public campus website with a secure, role-based academic portal for students, faculty, and administrators. Includes admissions, degree catalog, timetables, and a faculty gradebook.",
    title: "Veritas University",
    github: "https://github.com/ZakariaHizzi/academy-paltforme",
    live: "https://academy-paltforme-sfmv.vercel.app/",
    tags: ["#NextJS", "#NodeJS", "#MongoDB", "#Tailwind"],
  },

  {
    id: 6,
    img: img6,
    description:
      "A full-stack medical appointment booking application with a Node.js/Express backend and a Next.js frontend. Patients can browse doctors by specialty, view doctor profiles, and book appointments. Doctors/providers can manage their appointments and update statuses.",
    title: "HealSync",
    github: "https://github.com/ZakariaHizzi/booking-doctor-nodenexts",
    live: "https://booking-doctor-nodenexts.vercel.app/",
    tags: ["#NextJS", "#NodeJS", "#Tailwind", "#express"],
  },
];

const linkClass =
  "inline-flex flex-1 items-center justify-center gap-1.5 rounded border border-slate-700/80 px-3 py-2 font-label-mono text-[12px] text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_14px_rgba(34,211,238,0.18)]";

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_28px_60px_-32px_rgba(34,211,238,0.5)]">
      {/* Cover */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

        <span className="absolute right-4 top-4 rounded-full border border-slate-700/60 bg-slate-950/70 px-2.5 py-1 font-label-mono text-[10px] tracking-[0.18em] text-slate-300 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-400/20 bg-slate-950/60 px-2 py-0.5 font-label-mono text-[10px] text-cyan-300/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display-lg text-[19px] font-[700] leading-snug tracking-[-0.01em] text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p
          className={`font-body-md text-[14px] leading-relaxed text-slate-400 ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 w-fit cursor-pointer font-label-mono text-[11px] text-cyan-400/90 transition-colors hover:text-cyan-300 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        <div className="mt-auto flex gap-2 pt-5">
          {project.live && (
            <a
              className={linkClass}
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink className="text-[13px]" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              className={linkClass}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-[13px]" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="work"
      className="relative mx-auto mb-[128px] w-full max-w-[1280px] px-[32px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-24 bottom-10 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400/90">
            <span className="h-px w-8 bg-cyan-400/60" />
            Selected work
          </p>
          <h2 className="mt-5 font-display-lg text-[34px] leading-[1.1] font-[800] tracking-[-0.025em] text-on-surface md:text-[42px]">
            Featured Work
          </h2>
          <p className="mt-4 max-w-md font-body-md text-[15.5px] leading-[1.75] text-slate-400">
            Real products, shipped end to end — from interface to database and
            deploy.
          </p>
        </div>

        {/* Counter + controls */}
        <div className="flex items-center gap-4">
          <span className="font-label-mono text-[12px] tracking-widest text-slate-500">
            <span className="text-cyan-400">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              className="work-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-800 text-on-surface transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              className="work-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-800 text-on-surface transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: ".work-prev", nextEl: ".work-next" }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{
          "--swiper-navigation-color": "#22d3ee",
          "--swiper-pagination-color": "#22d3ee",
          "--swiper-pagination-bullet-inactive-color": "#64748b",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
        className="!pb-12"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
