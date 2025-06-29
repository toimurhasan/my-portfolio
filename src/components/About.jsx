import React from "react";

const About = () => {
  return (
    <div className="mt-10 lg:mt-0 pb-10 flex items-center justify-between max-w-7xl mx-auto px-4 flex-col md:flex-row">
      <div className="flex-1 justify-center px-4 sm:px-0">
        <img src="/about-me.jpeg" className="rounded-full lg:max-w-md" alt="about image" />
      </div>
      <div className="lg:flex-[1.5] flex-1 md:pl-6">
        <h3 className="text-center py-6 text-2xl font-light">
          About <span className="text-primary">Me</span>
        </h3>
        <div className="mx-auto">
          <p className="text-justify">
            While studying English Literature, I discovered an unexpected passion for building
            systems. What began as curiosity soon turned into a deep dive into web development. The
            logic of code, the creativity of interfaces, and the satisfaction of solving real
            problems — it all clicked. <br /> <br /> I started with small projects and gradually
            transitioned into full-stack development using the MERN stack. Now, I build clean,
            scalable, and user-focused web applications with technologies like React, Node.js, and
            MongoDB. My background in literature honed my communication and critical thinking skills
            — tools I now use to design intuitive user experiences and write maintainable,
            well-structured code.
            <br /> <br /> I see every project not just as code, but as a product that serves people
            — and that’s what keeps me building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
