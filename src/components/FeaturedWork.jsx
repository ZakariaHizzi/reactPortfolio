import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../works/portfolio1.PNG";
import img2 from "../works/portfolio2.PNG";
import img3 from "../works/portfolio3.PNG";
import img4 from "../works/portfolio4.PNG";
import img5 from "../works/portfolio5.PNG";
import img6 from "../works/portfolio6.PNG";

const projects = [
  {
    id: 1,
    img: img1,
    description:
      "A modern e-commerce web application built with React 19, featuring product browsing, shopping cart management, and user authentication.",
    title: "Ecommerce Website",
    github: "https://github.com/ZakariaHizzi/react-ecommerce-website",
    live: "https://chic-peony-ebef32.netlify.app/",
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
    id: 3,
    img: img3,
    description:
      "A luxury real estate marketplace built with React. Showcases high-end properties from French Riviera estates to Manhattan penthouses with a polished editorial aesthetic.",
    title: "LuxeSpace",
    github: "https://github.com/ZakariaHizzi/estate-react-website",
    live: "https://reactestatewebsite.netlify.app/",
    tags: ["#ReactJS", , "#Tailwind"],
  },
  {
    id: 4,
    img: img4,
    description:
      "A futuristic cyberpunk-themed restaurant website with immersive visual effects, online menu browsing, and table reservation functionality.",
    title: "NEON BISTRO",
    github: "https://github.com/ZakariaHizzi/react-resturant",
    live: "https://react-resturant2.netlify.app/",
    tags: ["#ReactJS", "#Tailwind"],
  },

  {
    id: 6,
    img: img6,
    description:
      "A modern healthcare platform that connects patients with world-class specialists. Find doctors, book appointments instantly, manage health records, and track treatment progress all in one place.",
    title: "HealSync",
    github: "https://github.com/ZakariaHizzi/dooctor-app",
    live: "https://dooctor-app-three.vercel.app/",
    tags: ["#NextJS", "#Supabase", "#Tailwind"],
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass rounded-[0.25rem] border border-slate-800 hover:border-cyan-400 transition-all duration-300 group overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full bg-slate-900 relative overflow-hidden">
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
          <a
            className="btn-ghost px-4 py-2 rounded font-label-mono text-[12px] flex-1 text-center"
            href={project.live}
            target="_blank"
          >
            Live Demo
          </a>
          <a
            className="btn-ghost px-4 py-2 rounded font-label-mono text-[12px] flex-1 text-center"
            href={project.github}
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="px-[32px] max-w-[1280px] mx-auto mb-[128px]" id="work">
      <h2 className="font-headline-md text-[32px] leading-[1.2] tracking-[-0.02em] font-[700] text-primary mb-12 flex items-center gap-4">
        <span className="w-8 h-px bg-primary" />
        Featured Work
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
