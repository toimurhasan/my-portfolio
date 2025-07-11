import React from "react";

const About = () => {
  return (
    <section className="mt-10 lg:mt-0 pb-10 flex lg:gap-2 items-center justify-center max-w-7xl mx-auto px-4 flex-col lg:flex-row">
      <div id="about" className=" justify-center">
        <img
          src="/about-me.jpeg"
          className="max-w-md sm:max-w-lg rounded-lg shadow-2xl"
          alt="about image"
        />
      </div>
      <div className=" lg:pl-6">
        <h3 className="py-6 text-2xl font-light">
          About <span className="text-primary">Me</span>
        </h3>
        <div className=" mx-auto space-y-3">
          <p>I’m an introvert, and I used to think that was a disadvantage.</p>
          <p>Until I discovered coding—where I could be my true self.</p>
          <p>Being authentic had numerous advantages.</p>
          <p>I could build without noise, think deeply, and stay focused for hours.</p>
          <p>Debugging felt like meditation. Designing felt like solving puzzles.</p>
          <p>I once stayed up all night trying to center a div.</p>
          <p>
            I finally found a career that fits <em>me</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
