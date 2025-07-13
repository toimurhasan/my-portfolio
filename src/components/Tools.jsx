import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";

const Tools = () => {
  return (
    <section id="tools" className="pb-10 px-4">
      <h3 className="text-center py-6 text-2xl font-light">
        Tools <span className="text-primary">I Use</span>
      </h3>
      <div className="flex gap-1 sm:gap-2 justify-center flex-wrap max-w-2xl mx-auto text-4xl">
        <div className="border p-3 rounded-2xl">
          <FaHtml5 />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaCss3 />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaBootstrap />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiTailwindcss />
        </div>
        <div className="border p-3 rounded-2xl">
          <IoLogoJavascript />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaReact />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiReactrouter />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiAxios />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiFirebase />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaNodeJs />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiExpress />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiJsonwebtokens />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiMongodb />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaSass />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaFigma />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaGithub />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiNetlify />
        </div>
      </div>
    </section>
  );
};

export default Tools;
