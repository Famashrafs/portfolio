import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Perspective from "./components/Perspective.js";
import Capabilities from "./components/Capabilities.js";
import Certifications from "./components/Certifications.js";
import CaseStudies from "./components/CaseStudies.js";
import Journey from "./components/Journey.js";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Perspective id="about" />
        <Capabilities id="skills" />
        <Certifications />
        <CaseStudies id="projects" />
        <Journey id="experience" />
        <Resume />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
