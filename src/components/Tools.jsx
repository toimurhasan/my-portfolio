import React from "react";
import Marquee from "react-fast-marquee";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCpanel,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaNpm,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaSlack,
  FaWordpress,
} from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiVuejsLine } from "react-icons/ri";
import {
  SiAxios,
  SiCanva,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiJest,
  SiJquery,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNotion,
  SiObsidian,
  SiPnpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiWoo,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";

const Tools = () => {
  return (
    <section id="tools" className="pb-10">
      <Tooltip id="my-tooltip" />
      <h3 className="text-center py-6 text-2xl font-light">
        Tools <span className="text-primary">I Use</span>
      </h3>
      <Marquee
        className=" text-3xl sm:text-4xl opacity-90 sm:opacity-80 "
        gradient="true"
        gradientColor={"oklch(14% 0.005 285.823)"}
        speed={3}
        gradientWidth={80}
        // pauseOnHover={"false"}
      >
        <a
          href="https://www.w3schools.com/html"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="HTML5"
        >
          <FaHtml5 />
        </a>
        <a
          href="https://www.w3schools.com/css"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="CSS3"
        >
          <FaCss3 />
        </a>
        <a
          href="https://getbootstrap.com/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Bootstrap"
        >
          <FaBootstrap />
        </a>
        <a
          href="https://sass-lang.com/documentation/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Sass"
        >
          <FaSass />
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Tailwind CSS"
        >
          <SiTailwindcss />
        </a>
        <a
          href="https://daisyui.com/components/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="DaisyUI"
        >
          <SiDaisyui />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="JavaScript"
        >
          <IoLogoJavascript />
        </a>
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="React"
        >
          <FaReact />
        </a>
        <a
          href="https://reactrouter.com/en/main"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="React Router"
        >
          <SiReactrouter />
        </a>
        <a
          href="https://axios-http.com/docs/intro"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Axios"
        >
          <SiAxios />
        </a>
        <a
          href="https://firebase.google.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Firebase"
        >
          <SiFirebase />
        </a>
        <a
          href="https://nodejs.org/en/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Node.js"
        >
          <FaNodeJs />
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Express.js"
        >
          <SiExpress />
        </a>
        <a
          href="https://jwt.io/introduction"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="JWT"
        >
          <SiJsonwebtokens />
        </a>
        <a
          href="https://www.mongodb.com/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="MongoDB"
        >
          <SiMongodb />
        </a>
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Git"
        >
          <FaGitSquare />
        </a>
        <a
          href="https://docs.github.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://code.visualstudio.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="VS Code"
        >
          <VscVscodeInsiders />
        </a>
        <a
          href="https://docs.cpanel.net/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="cPanel"
        >
          <FaCpanel />
        </a>
        <a
          href="https://docs.npmjs.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="NPM"
        >
          <FaNpm />
        </a>
        <a
          href="https://help.figma.com/hc/en-us"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Figma"
        >
          <FaFigma />
        </a>
        <a
          href="https://wordpress.org/support/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="WordPress"
        >
          <FaWordpress />
        </a>
        <a
          href="https://woocommerce.com/documentation/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="WooCommerce"
        >
          <SiWoo />
        </a>
        <a
          href="https://elementor.com/help/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Elementor"
        >
          <FaElementor />
        </a>
        <a
          href="https://www.canva.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Canva"
        >
        <SiCanva/>
        </a>
      </Marquee>

      {/* ==========//=========== Second Marquee =========//========== */}
      {/* <Marquee
        className=" text-3xl sm:text-4xl opacity-90 sm:opacity-80 mt-4"
        gradient="true"
        direction="right"
        gradientColor={"oklch(14% 0.005 285.823)"}
        speed={1}
        gradientWidth={80}
      >
       
      
       
        <div className="border mx-1 p-3 rounded-2xl">
          <SiPnpm />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <SiJquery />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <SiPostman />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <FaPhp />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <FaPython />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <SiRedux />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <SiPrisma />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <GrGraphQl />
        </div>
        <div className="border mx-1 p-3 rounded-2xl">
          <SiMongoose />
        </div>
       
       
        <div className="border mx-1 p-3 rounded-2xl">
          <SiNotion />
        </div>
      
        <div className="border mx-1 p-3 rounded-2xl">
          <FaSlack />
        </div>
      </Marquee> */}
    </section>
  );
};

export default Tools;
