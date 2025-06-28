import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <h2 className="text-xl font-light cursor-pointer">/toimurhasan</h2>
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
  );
};

export default Navbar;
