import React from "react";

const Project = () => {
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
        <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
          <div className="badge badge-soft ">Tailwind</div>
          <div className="badge badge-soft ">React.js</div>
          <div className="badge badge-soft ">Express</div>
          <div className="badge badge-soft ">MongoDB</div>
        </div>
        <div className="mt-4 space-x-2">
          <button className="btn">Live Link</button>
          <button className="btn">View Code</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
