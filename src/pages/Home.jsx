import React from "react";
import Hero from "../components/Hero";
// import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Hero></Hero>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
