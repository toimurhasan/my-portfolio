import React from "react";
import { Link } from "react-router";

export const SBT = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row  gap-8">
      <img
        src="https://i.ibb.co.com/FLMGvqwQ/sbt.png"
        alt="Project Two"
        className="md:max-w-lg lg:max-w-md rounded-lg shadow-2xl object-cover"
      />
      <div className="space-y-2 text-center lg:text-start">
        <h3 className="text-2xl font-light ">SonarBangla Travels — Tourism Web App</h3>
        <p>
          A dynamic travel and tourism web application that allows users to browse curated tour
          packages, apply to become tour guides, and share inspiring travel stories. The frontend,
          developed with React, integrates seamlessly with a robust backend API to deliver a smooth
          and responsive full-stack experience.
        </p>
        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
          <div className="badge badge-soft ">MongoDB</div>
          <div className="badge badge-soft ">Express.js</div>
          <div className="badge badge-soft ">React.js</div>
          <div className="badge badge-soft ">Node.js</div>
        </div>
        <div className="mt-4  flex gap-2 justify-center lg:justify-start lg:flex-row">
          <Link
            to={"https://sonarbangla-travels.web.app/"}
            target="_blank"
            className="btn btn-primary"
          >
            Live Site
          </Link>
          <Link
            to={"https://github.com/toimurhasan/sonarbangla-travels-client"}
            target="_blank"
            className="btn"
          >
            Client
          </Link>
          <Link
            to={"https://github.com/toimurhasan/sonarbangla-travels-server"}
            target="_blank"
            className="btn"
          >
            Server
          </Link>
        </div>
      </div>
    </div>
  );
};
