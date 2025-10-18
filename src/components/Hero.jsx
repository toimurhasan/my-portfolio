import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-b from-base-200 to-base-300 sm:min-h-[calc(100vh-65px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/8DW3FTSm/me.jpg"
            className=" sm:max-w-md rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1 sm:text-center lg:text-start">
          <h1 className="text-5xl font-light">Toimur Hasan</h1>
          <h4 className="py-1 italic">Frontend Developer (MERN Stack)</h4>
          <p className="py-3">
            I bring React to life while keeping MongoDB, Express, and Node in harmony behind the
            scenes.
          </p>
          <div className="py-3 flex gap-2 sm:justify-center lg:justify-start">
            <Link
              to={"https://wa.me/+8801720911179"}
              target="_blank"
              className="btn btn-circle text-lg"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              to={"https://github.com/toimurhasan"}
              target="_blank"
              className="btn btn-circle text-[1.01rem]"
            >
              <FaGithub />
            </Link>
            <Link
              to={"https://web.facebook.com/web.developer.tamim/"}
              target="_blank"
              className="btn btn-circle"
            >
              <FaFacebookF />
            </Link>
          </div>
          <Link
            to={
              "https://drive.google.com/file/d/14BRYlP7lN7Bj2DpkWlj8lIg5astLOIEk/view?usp=drive_link"
            }
            target="_blank"
            className="btn btn-primary"
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
