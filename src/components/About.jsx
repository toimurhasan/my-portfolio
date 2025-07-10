import React from "react";

const About = () => {
  return (
    <section className="mt-10 lg:mt-0 pb-10 flex items-center justify-between max-w-7xl mx-auto px-4 flex-col lg:flex-row">
      <div id="about" className="flex-1 justify-center">
        <img
          src="/about-me.jpeg"
          className="lg:max-w-lg sm:max-w-md rounded-lg shadow-2xl"
          alt="about image"
        />
      </div>
      <div className="lg:flex-[1.3] flex-1 lg:pl-6">
        <h3 className="text-center py-6 text-2xl font-light">
          About <span className="text-primary">Me</span>
        </h3>
        <div className="mx-auto space-y-3">
          <p className="text-justify">
            I'm a dedicated and versatile web developer with experience in creating efficient,
            scalable, and visually appealing web applications. My skill set includes front-end
            development using HTML, CSS, JavaScript, and frameworks like React, as well as back-end
            development with Node.js, Express, and MongoDB.
          </p>
          <p className="text-justify">
            I’m comfortable working across the full stack and thrive in collaborative environments
            where I can contribute to clean, maintainable code and user-centric design. I enjoy
            staying up-to-date with the latest web technologies and trends, and I'm always looking
            for ways to enhance user experience and performance. Whether it's building something
            from scratch or optimizing an existing product, I'm passionate about turning ideas into
            reality on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
