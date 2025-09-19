import React from "react";
import "./about.css";

export function About() {
  return (
    <section id="about" className="min-h-[70vh] md:h-[70vh] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 md:pt-8 mt-2 md:ml-15">
      <div className="max-w-4xl mx-auto w-full flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center place-items-center max-w-3xl about-grid">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-4 flex flex-col items-center md:items-start order-1 lg:order-1 about-text-content">
            {/* Greeting */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight whitespace-nowrap">
              Hi,I'm <span className="text-blue-600">Abdur Rahman</span>
            </h2>

            {/* Job Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Full Stack Developer
            </h2>

            <p className="text-base text-gray-700 leading-relaxed max-w-md">
              I’m a full-stack developer focused on building scalable and high-performance web applications.
              Proficient in the <span className="font-semibold">MERN stack</span> and <span className="font-semibold">Next.js</span>,
              with strong expertise in <span className="font-semibold">TypeScript</span> for maintainable code and
              <span className="font-semibold"> AWS</span> for secure, cloud-native deployments.
            </p>


            {/* Contact Button */}
            <button className="px-6 py-2 bg-black border border-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <a href="#contact"> Contact Now </a> 
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-2 lg:order-2">
            <div className="relative">
              {/* Image Placeholder */}
              <div className="w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl overflow-hidden">
                <div className="text-center space-y-3">
                  <img
                    src="/profile.jpg"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-56 h-56 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
