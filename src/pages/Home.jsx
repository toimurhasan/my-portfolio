import React from "react";
import Hero from "../components/Hero";
// import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Hero></Hero>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
