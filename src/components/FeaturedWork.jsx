import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
    github: "https://github.com/ZakariaHizzi/traveling-web-site",
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
    github: "https://github.com/ZakariaHizzi/dooctor-app",
    live: "https://booking-doctor-nodenexts.vercel.app/",
    tags: ["#NextJS", "#NodeJS", "#Tailwind", "#express"],
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass rounded-[0.25rem] border border-slate-800 hover:border-cyan-400 transition-all duration-300 group overflow-hidden flex flex-col h-full">
      <div className="aspect-[4/3] w-full bg-slate-900 relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-body-lg text-[18px] leading-[1.6] text-on-surface font-bold mb-2">
          {project.title}
        </h3>
        <p
          className={`font-body-md text-[16px] leading-[1.5] text-on-surface-variant mb-4 flex-1 ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 text-[13px] font-label-mono mb-4 text-left hover:underline cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-label-mono text-[12px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {project.live && (
            <a
              className="btn-ghost px-4 py-2 rounded font-label-mono text-[12px] flex-1 text-center"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              className="btn-ghost px-4 py-2 rounded font-label-mono text-[12px] flex-1 text-center"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="px-[32px] max-w-[1280px] mx-auto mb-[128px]" id="work">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-headline-md text-[32px] leading-[1.2] tracking-[-0.02em] font-[700] text-primary flex items-center gap-4">
          <span className="w-8 h-px bg-primary" />
          Featured Work
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous project"
            className="work-prev w-10 h-10 rounded border border-slate-800 text-on-surface flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next project"
            className="work-next w-10 h-10 rounded border border-slate-800 text-on-surface flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: ".work-prev", nextEl: ".work-next" }}
        pagination={{ clickable: true }}
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
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
