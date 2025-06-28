import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto sticky top-0">
      <div className="absolute navbar bg-base-100 shadow-sm rounded-b-xl">
        <div className="navbar-start">
          <h2 className="text-xl font-light ml-2 cursor-pointer">/toimurhasan</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Skills</NavLink>
            </li>
            <li>
              <NavLink>Education</NavLink>
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
          <a className="btn">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
