import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";

const Projects = () => {
  return (
    <div className="pb-10 px-4 max-w-7xl mx-auto">
      <h3 className="text-center py-6 text-2xl font-light mb-4">
        Projects <span className="text-primary">I Made</span>
      </h3>
      <div className="space-y-8">
        <ProjectOne></ProjectOne>
        <ProjectTwo></ProjectTwo>
      </div>
    </div>
  );
};

export default Projects;
