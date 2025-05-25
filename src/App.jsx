import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import "./index.css";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Navigation from "./components/Navigation";
import About from "./components/About";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-orange-50'>
      
      {/* Animated background elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <About />

      <Skills />

      {/* <Experience /> */}

      <Projects />

      <Contacts />

      <Footer />
    </div>
  );
};

export default Portfolio;
