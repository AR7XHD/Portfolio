import React from "react";

export function Skills() {
  const skills = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const duplicatedSkills = [...skills, ...skills]; // duplicate for seamless loop

  return (
    <section className="mt-20 py-16 overflow-hidden bg-white">
      <style>{`
        /* horizontal infinite scroll animation */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* because we duplicated items */
        }

        /* apply animation on all screen sizes */
        .scroll-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }

        /* faster animation on mobile for better experience */
        @media (max-width: 639px) {
          .scroll-track {
            animation: scroll-left 20s linear infinite;
            gap: 1rem;
          }
        }

        /* pause on hover for desktop */
        @media (min-width: 640px) {
          .scroll-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications.
          </p>
        </div>

        {/* Infinite Sliding Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {/* Track with duplicated items. use 'scroll-track' for animation */}
            <div className="scroll-track">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 group"
                >
                  <div className="flex flex-col items-center p-3 sm:p-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-w-[120px] sm:min-w-[150px]">
                    {/* Image with no background */}
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={skill.src}
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                        style={{ background: 'none' }}
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-gray-800 text-center">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for white theme */}
          <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10">
            <div className="h-full w-full bg-gradient-to-r from-white to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10">
            <div className="h-full w-full bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
