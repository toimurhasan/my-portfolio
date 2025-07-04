import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="pb-10 px-4 max-w-7xl mx-auto">
      <h3 className="text-center py-6 text-2xl font-light mb-4">
        Projects <span className="text-primary">I Made</span>
      </h3>
      <Project></Project>
    </div>
  );
};

export default Projects;
