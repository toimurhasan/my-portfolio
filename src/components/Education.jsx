import React from "react";
import { Link } from "react-router";

const Education = () => {
  return (
    <section id="education" className=" flex flex-col items-center bg-base-300">
      <h3 className="py-6 text-2xl font-light">
        <span className="text-primary">My</span> Education
      </h3>
      <p>English Language & Literature</p>
      <p>Bachelor of Arts (2024 - Ongoing)</p>
      <Link
        target="_blank"
        to={"https://en.wikipedia.org/wiki/Islamia_Government_College"}
        className="underline hover:text-blue-600 text-blue-500"
      >
        Islamia Government College, Sirajganj
      </Link>
    </section>
  );
};

export default Education;
