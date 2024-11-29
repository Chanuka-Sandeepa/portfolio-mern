import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/ContactSection';
import Projects from './components/ProjectsSection';

export default function App() {
  return (
    <div>
      {/* Include the NavBar */}
      <NavBar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
