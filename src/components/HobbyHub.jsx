import React from "react";
import { Link } from "react-router";

const HobbyHub = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row  gap-8">
      <img
        src="/hobbyhub.png"
        alt="Project Two"
        className="md:max-w-lg lg:max-w-md rounded-lg shadow-2xl object-cover"
      />
      <div className="space-y-2 text-center lg:text-start">
        <h3 className="text-2xl font-light ">HobbyHub — Social Platform for Hobbyists</h3>
        <p>
          HobbyHub is a full-stack social platform designed for people to connect through shared
          hobbies. A User can create, manage, and join hobby-based groups to build communities
          around their passions. Find your Hobby Group faster than ever, thanks to HobbyHub’s
          beautiful and responsive interface.
        </p>
        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
          <div className="badge badge-soft ">MongoDB</div>
          <div className="badge badge-soft ">Express.js</div>
          <div className="badge badge-soft ">React.js</div>
          <div className="badge badge-soft ">Node.js</div>
        </div>
        <div className="mt-4  flex gap-2 justify-center lg:justify-start lg:flex-row">
          <Link to={"https://hobbyhub-tamim.web.app/"} target="_blank" className="btn btn-primary">
            Live Site
          </Link>
          <Link
            to={"https://github.com/toimurhasan/hobbyhub-client"}
            target="_blank"
            className="btn"
          >
            Client
          </Link>
          <Link
            to={"https://github.com/toimurhasan/hobbyhub-server"}
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

export default HobbyHub;
