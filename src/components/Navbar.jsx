import React from "react";
import { NavLink } from "react-router";

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
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Technologies</NavLink>
            </li>
            <li>
              <NavLink>Academics</NavLink>
            </li>
            <li>
              <NavLink>Experience</NavLink>
            </li>
            <li>
              <NavLink>Projects</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1If6klhtgo2I5X_j9wMD5QDA0giGIQSnx/view?usp=drive_link"
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
