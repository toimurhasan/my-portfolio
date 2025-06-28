import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-light">Toimur Hasan</h1>
          <h4 className="py-1">MERN Stack Devloper</h4>
          <p className="pt-6">
            As a MERN stack developer, I specialize in building full-stack JavaScript applications
            using MongoDB, Express.js, React, and Node.js. My expertise in these technologies allows
            me to deliver high-performance, user-friendly web solutions.
          </p>
          <div className="py-3 flex gap-1">
            <button className="btn btn-circle">
              <FaGithub />
            </button>
            <button className="btn btn-circle">
              <FaLinkedinIn />
            </button>
            <button className="btn btn-circle">
              <FaFacebookF />
            </button>
          </div>
          <button className="btn btn-primary">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
