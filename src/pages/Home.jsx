import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Tools from "../components/Tools";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Hero></Hero>
      <About></About>
      <Tools></Tools>
      <Projects></Projects>
      {/* <Experience></Experience> */}
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
