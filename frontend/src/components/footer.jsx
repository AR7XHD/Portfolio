import React from "react";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";

export function Footer({ className = "", links = {} }) {
  const {
    linkedin = "https://www.linkedin.com/in/abdur-rahmaan-moiz-3ba446334/",
    github = "https://github.com/AR7XHD",
    instagram = "https://www.instagram.com/abdur7_rahmaan/",
    facebook = "",
  } = links;

  return (
    <footer className={`w-full bg-white text-black border-t border-black ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">Abdur Rahmaan</span>
          <span className="text-sm text-gray-600">— Full-stack Developer</span>
        </div>

        <nav aria-label="Social media" className="flex items-center gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-2 rounded-md hover:bg-black hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-2 rounded-md hover:bg-black hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group p-2 rounded-md hover:bg-black hover:text-white transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group p-2 rounded-md hover:bg-black hover:text-white transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </nav>

        <div className="text-sm text-gray-600">© {new Date().getFullYear()} . All rights reserved.</div>
      </div>
    </footer>
  );
}

/*
- White background with black text and accents.
- Hover turns icons/text inverted (black bg, white text).
- Consistent black/white theme only.
*/