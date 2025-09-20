// Projects.jsx
"use client";
import React from "react";
import TiltedCard from "./TiltedCard";

export function Projects() {
  const products = [


    {
      // /public/WhatsApp Image ... -> real estate / Homyz style
      title: "Homyz — Property Showcase",
      caption:
        "Real-estate hero & listing layout with large imagery, search field and property stat widgets for high-conversion listings.",
      link: "https://example-homyz.com",
      github: "https://github.com/AR7XHD/homyz-listings",
      tech: ["React", "Firebase", "Stripe"],
      thumbnail: "/123.jpeg",
    },


    {
      // /public/3130384.jpg -> travel hero (woman with hat, enjoy travel)
      title: "Enjoy — Travelling Moment",
      caption:
        "A travel hero landing layout focused on immersive, full-screen visuals and bold CTAs that drive bookings and exploration.",
      link: "https://example-travel-live.com",
      github: "https://github.com/AR7XHD/travel-hero",
      tech: ["UI/UX", "React", "Tailwind"],
      thumbnail: "/3130384.jpg",
    },
    {
      // /public/3562984.jpg -> food / restaurant theme
      title: "Delicious — Restaurant Landing",
      caption:
        "A restaurant & food service landing page design showcasing hero photography, menu highlights, and order CTA patterns.",
      link: "https://example-restaurant.com",
      github: "https://github.com/AR7XHD/restaurant-landing",
      tech: ["HTML", "CSS", "Figma"],
      thumbnail: "/3562984.jpg",
    },
    {
      // /public/7912222.jpg -> travel/booking (TravelDream style)
      title: "TravelDream — Booking UI",
      caption:
        "A modern travel booking interface with large headlines, step-based search controls and attractive media cards for destinations.",
      link: "https://example-traveldream.com",
      github: "https://github.com/AR7XHD/traveldream-ui",
      tech: ["Next.js", "Vite", "Tailwind"],
      thumbnail:"/7912222.jpg",
    },
   
  ];

  const defaultCardProps = {
    rotateAmplitude: 10,
    scaleOnHover: 1.12,
    showMobileWarning: false,
    showTooltip: true,
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8 text-center">
  <h2 className="text-2xl md:text-4xl font-bold">Selected Projects</h2>
  <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
    A handful of projects I've built, showcasing my work and skills.
  </p>
</header>


      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {products.map((p) => (
          <div key={p.title} className="w-full max-w-md mt-10 aspect-video">
            <TiltedCard
              imageSrc={p.thumbnail}
              altText={`${p.title} thumbnail`}
              captionText={p.caption}
              rotateAmplitude={defaultCardProps.rotateAmplitude}
              scaleOnHover={defaultCardProps.scaleOnHover}
              showMobileWarning={defaultCardProps.showMobileWarning}
              showTooltip={defaultCardProps.showTooltip}
              displayOverlayContent={true}
              // overlayContent={
              //   <div className="p-3 text-left w-full">
              //     <h3 className="text-sm md:text-base font-semibold text-white">{p.title}</h3>
              //     <p className="text-[12px] md:text-sm text-white/90 mt-1 line-clamp-2">
              //       {p.caption}
              //     </p>
              //     <div className="mt-2 flex flex-wrap gap-2">
              //       {p.tech.map((t) => (
              //         <span
              //           key={t}
              //           className="text-[10px] md:text-xs bg-white/20 text-white px-2 py-0.5 rounded-full"
              //         >
              //           {t}
              //         </span>
              //       ))}
              //     </div>
              //     <div className="mt-3 flex items-center gap-3">
              //       <a
              //         href={p.link}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="text-xs md:text-sm bg-white/20 text-white px-3 py-1 rounded hover:opacity-90 transition"
              //         onClick={(e) => e.stopPropagation()}
              //       >
              //         Live →
              //       </a>
              //       <a
              //         href={p.github}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="text-xs md:text-sm bg-white/10 text-white border border-white/20 px-3 py-1 rounded hover:opacity-90 transition"
              //         onClick={(e) => e.stopPropagation()}
              //       >
              //         GitHub
              //       </a>
              //     </div>
              //   </div>
              // }
            />
          </div>
        ))}
      </div>

      {/* Minimal underline "See more" */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/AR7XHD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-base md:text-lg font-medium text-black border-b border-black hover:opacity-80 transition"
        >
          See more →
        </a>
      </div>
    </section>
  );
}

export default Projects;
