import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <section id="contact" className="pb-5 flex flex-col items-center bg-base-300">
      <h3 className=" py-6 text-2xl font-light">
        Contact <span className="text-primary">Me</span>
      </h3>
      <Link
        to={"https://wa.me/+8801720911179"}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        wa.me/+8801720911179
      </Link>
      <p>toimurhasan50@gmail.com</p>
    </section>
  );
};

export default Contact;
