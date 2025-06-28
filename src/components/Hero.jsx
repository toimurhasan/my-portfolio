import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img src="/me.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-light">Toimur Hasan</h1>
          <h4 className="py-1">MERN Stack Devloper</h4>
          <p className="pt-6">
            As a MERN stack developer, I specialize in building full-stack JavaScript applications
            using MongoDB, Express.js, React, and Node.js. My expertise in these technologies allows
            me to deliver high-performance, user-friendly web solutions.
          </p>
          <div className="py-3 flex gap-2">
            <Link to={"https://github.com/toimurhasan"} target="_blank" className="btn btn-circle">
              <FaGithub />
            </Link>
            <button className="btn btn-circle">
              <FaLinkedinIn />
            </button>
            <Link
              to={"https://web.facebook.com/toimurhasan73/"}
              target="_blank"
              className="btn btn-circle"
            >
              <FaFacebookF />
            </Link>
          </div>
          <button className="btn btn-primary">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
