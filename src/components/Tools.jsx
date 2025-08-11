import Marquee from "react-fast-marquee";
import { BiLogoTypescript } from "react-icons/bi";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAxios,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiPostgresql,
  SiReactrouter,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="HTML5"
        >
          <FaHtml5 className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://www.w3schools.com/css"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="CSS3"
        >
          <FaCss3 className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://getbootstrap.com/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Bootstrap"
        >
          <FaBootstrap className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://sass-lang.com/documentation/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Sass"
        >
          <FaSass className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Tailwind CSS"
        >
          <SiTailwindcss className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://daisyui.com/components/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="DaisyUI"
        >
          <SiDaisyui className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="JavaScript"
        >
          <IoLogoJavascript className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="React"
        >
          <FaReact className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://reactrouter.com/en/main"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="React Router"
        >
          <SiReactrouter className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://axios-http.com/docs/intro"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Axios"
        >
          <SiAxios className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://firebase.google.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Firebase"
        >
          <SiFirebase className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://nodejs.org/en/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Node.js"
        >
          <FaNodeJs className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Express.js"
        >
          <SiExpress className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://jwt.io/introduction"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="JWT"
        >
          <SiJsonwebtokens className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://www.mongodb.com/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="MongoDB"
        >
          <SiMongodb className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://mui.com/material-ui/getting-started/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Material UI"
        >
          <SiMui className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="TypeScript"
        >
          <BiLogoTypescript className="group-hover:text-primary transition" />
        </a>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Next.js"
        >
          <TbBrandNextjs className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://www.postgresql.org/docs/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="PostgreSQL"
        >
          <SiPostgresql className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://sequelize.org/docs/v6/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Sequelize"
        >
          <SiSequelize className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://jestjs.io/docs/getting-started"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Jest"
        >
          <SiJest className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://cloud.google.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Google Cloud Platform"
        >
          <DiGoogleCloudPlatform className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Git"
        >
          <FaGitSquare className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://docs.github.com/"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GitHub"
        >
          <FaGithub className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://code.visualstudio.com/docs"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="VS Code"
        >
          <VscVscodeInsiders className="group-hover:text-primary transition" />
        </a>
        <a
          href="https://help.figma.com/hc/en-us"
          target="_blank"
          className="border block mx-1 p-3 rounded-2xl cursor-pointer group hover:border-transparent"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Figma"
        >
          <FaFigma className="group-hover:text-primary transition" />
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
