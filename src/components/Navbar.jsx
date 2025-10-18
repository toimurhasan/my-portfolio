import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <h2 className="text-xl font-light ml-2 cursor-pointer">/toimurhasan</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <span
                onClick={() => {
                  const element = document.getElementById("about");
                  const yOffset = -100; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                About
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  const element = document.getElementById("tools");
                  const yOffset = -60; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Tools
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  const element = document.getElementById("projects");
                  const yOffset = -80; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Projects
              </span>
            </li>
            {/* <li>
              <span
                onClick={() => {
                  const element = document.getElementById("experience");
                  const yOffset = -80; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Experience
              </span>
            </li> */}
            <li>
              <span
                onClick={() => {
                  const element = document.getElementById("education");
                  const yOffset = -80; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Education
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  const element = document.getElementById("contact");
                  const yOffset = -80; // Adjust this value as needed (e.g. height of your navbar)
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/14BRYlP7lN7Bj2DpkWlj8lIg5astLOIEk/view?usp=drive_link"
            target="_blank"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
