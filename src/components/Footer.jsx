import { FaLinkedin, FaGithubSquare, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-[128px] bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-[32px] max-w-[1280px] mx-auto gap-[24px]">
        <span className="font-display-lg text-[18px] leading-[1.6] text-on-surface">
          H.Z
        </span>
        <div className="flex gap-6 font-label-mono text-label-mono">
          <a href="https://github.com/ZakariaHizzi" target="_blank">
            <span>Github</span>
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/zakaria-hizzi-3234a9297/"
            target="_blank"
          >
            <span>Linkedin</span>
            <FaLinkedin />
          </a>
        </div>
        <p className="font-label-mono text-label-mono text-secondary">
          &copy; 2024 H.Z. Engineered for Performance.
        </p>
      </div>
    </footer>
  );
}
