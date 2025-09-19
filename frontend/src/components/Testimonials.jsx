import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Abdur developed a seamless web application for us, perfectly aligned with our business requirements. His ability to understand our needs and deliver high-quality results was impressive.",
      name: "Riya Sharma",
      designation: "Product Manager at TechFlow",
      src: "/woman.jpg",
    },
    {
      quote:
        "We trusted him with a critical MERN stack project and he delivered beyond expectations. The performance and scalability have been a huge advantage for our growing user base.",
      name: "Arjun Mehta",
      designation: "CTO at InnovateSphere",
      src: "/man.webp",
    },
    {
      quote:
        "Abdur's problem-solving skills and clean coding practices stood out. The web platform he built for us runs smoothly even under high traffic, which is crucial for our operations.",
      name: "Karan Patel",
      designation: "Engineering Lead at DataPro Systems",
      src: "/man2.jpg",
    },
    {
      quote:
        "His full stack expertise helped us launch faster than expected. The user-friendly interface and strong backend have made a big impact on our customers.",
      name: "Neha Verma",
      designation: "VP of Technology at FutureNet",
      src: "/man.webp",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A few words from clients and collaborators about my work as a full
          stack web developer.
        </p>
        <div className="mt-5">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
