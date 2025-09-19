// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navabr.jsx";
import { About } from "./components/about.jsx";
import { Skills } from "./components/skills.jsx";
import { Projects } from "./components/projects.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { ContactForm } from "./components/conatct.jsx";
import { Footer } from "./components/footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </BrowserRouter>
  );
}
