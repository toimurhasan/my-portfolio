import React from "react";

const About = () => {
  return (
    <div className="mt-10 lg:mt-0 pb-10 flex items-center justify-between max-w-7xl mx-auto px-4 flex-col md:flex-row">
      <div className="flex-1 justify-center">
        <img src="/about-me.jpeg" className="rounded-xl lg:max-w-lg" alt="about image" />
      </div>
      <div className="lg:flex-[1.3] flex-1 md:pl-6">
        <h3 className="text-center py-6 text-2xl font-light">
          About <span className="text-primary">Me</span>
        </h3>
        <div className="mx-auto">
          <p className="text-justify">
            While studying English Literature, I discovered an unexpected passion for building
            systems. What began as curiosity soon turned into a deep dive into web development. The
            logic of code, the creativity of interfaces, and the satisfaction of solving real
            problems — it all clicked. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, odit
            perspiciatis quaerat eos rem distinctio labore minus, vel dignissimos veritatis, optio
            nam sint laboriosam temporibus quibusdam deleniti enim at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
