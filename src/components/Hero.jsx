import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero sm:min-h-[calc(100vh-65px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img src="/me.jpeg" className=" sm:max-w-md rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1 sm:text-center lg:text-start">
          <h1 className="text-5xl font-light">Toimur Hasan</h1>
          <h4 className="py-1">Frontend-Heavy MERN Stack Developer</h4>
          <p className="pt-6">
            I build clean, scalable web applications using modern technologies like React, Node.js,
            and MongoDB—focusing on maintainable code, intuitive interfaces, and thoughtful system
            design to solve real-world problems.
          </p>
          <div className="py-3 flex gap-2 sm:justify-center lg:justify-start">
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
          <Link to={"/resume.pdf"} target="_blank" className="btn btn-primary">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
