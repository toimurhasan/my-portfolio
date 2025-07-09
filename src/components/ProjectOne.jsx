import React from "react";
import { Link } from "react-router";

const ProjectOne = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row  gap-8">
      <img
        src="/peersolve.png"
        alt="Project One"
        className="md:max-w-lg lg:max-w-md rounded-lg shadow-2xl object-cover"
      />
      <div className="space-y-2 text-center lg:text-start">
        <h3 className="text-2xl font-light ">PeerSolve — Your Digital Study Circle</h3>
        <p>
          PeerSolve is a collaborative web application designed to enhance group study experiences.
          Every registered user is automatically connected as a peer, creating a friendly and
          inclusive academic environment where users can assign, complete, and evaluate each other’s
          work.
        </p>
        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
          <div className="badge badge-soft ">Tailwind</div>
          <div className="badge badge-soft ">React.js</div>
          <div className="badge badge-soft ">Express</div>
          <div className="badge badge-soft ">MongoDB</div>
        </div>
        <div className="mt-4 space-x-2">
          <Link to={"https://peersolve.web.app/"} target="_blank" className="btn">
            Live Link
          </Link>
          <Link
            to={"https://github.com/toimurhasan/peersolve-client/"}
            target="_blank"
            className="btn"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
