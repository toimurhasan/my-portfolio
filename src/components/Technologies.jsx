import React from "react";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="bg-base-200 pb-10">
      <h3 className="text-center py-6 text-2xl font-light">Technogies</h3>
      <div className="flex gap-4 justify-center flex-wrap max-w-2xl mx-auto">
        <div className="border p-3 rounded-2xl">
          <FaHtml5 size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaCss3 size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaBootstrap size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiTailwindcss size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <IoLogoJavascript size={40} />{" "}
        </div>
        <div className="border p-3 rounded-2xl">
          <FaReact size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiReactrouter size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiAxios size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiFirebase size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaNodeJs size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiExpress size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiJsonwebtokens size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <SiMongodb size={40} />
        </div>
        <div className="border p-3 rounded-2xl">
          <FaGithub size={40} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
