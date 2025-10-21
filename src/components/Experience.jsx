import React from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h3 className="text-center py-6 text-2xl bg-gradient-to-b from-base-200 to-base-300 font-light">
        Experience <span className="text-primary">I Have</span>
      </h3>
      <div className="bg-base-300">
        <div className="max-w-5xl mx-auto px-4 ">
          <ul className="timeline bg-base-300 border-base-100 border-4 sm:text-base timeline-box max-md:timeline-compact timeline-vertical md:px-10 py-6">
            <li>
              <div className="timeline-middle ">
                <FaCircle size={12} />
              </div>
              <div className="timeline-start mb-10 md:text-end space-y-2">
                <time className="font-mono italic">April, 2025</time>
                <div className="text-lg font-black">Paikari Organic Ghor</div>
                <img
                  src="paikariorganicghor.png"
                  alt="Paikari Organic Ghor"
                  className="rounded-2xl"
                />
                <p className="md:pl-10">
                  Building this E-store from scratch exposed me to server management softwares like
                  cPanel, and principles behind good and bad UI design.
                </p>
                <div>
                  <a href="https://paikariorganicghor.com/" target="_blank" className="btn btn-sm">
                    Have a Look <FaArrowRight />
                  </a>
                </div>
              </div>
              <hr className="mx-2 bg-base-100" />
            </li>
            <li>
              <hr className="mx-2 bg-base-100" />
              <div className="timeline-middle">
                <FaCircle size={12} />
              </div>
              <div className="timeline-end mb-10 space-y-2">
                <time className="font-mono italic">November, 2024</time>
                <div className="text-lg font-black">Rashidozzoha Govt. Women's College</div>
                <img
                  src="rgwc.png"
                  alt="Rashidozzoha Govt. Women's College"
                  className="rounded-2xl"
                />
                <p className="md:pr-10">
                  This was my first-ever student management project, done in collaboration with{" "}
                  <a
                    className="link text-blue-500 hover:text-blue-600"
                    href="https://github.com/arnobghosh"
                    target="_blank"
                  >
                    Arnob Ghosh
                  </a>
                  , who managed the backend.
                </p>
                <div className="space-x-2">
                  <a href="https://rgwc.edu.bd/" target="_blank" className="btn btn-sm">
                    Live
                  </a>
                  <a
                    href="https://github.com/toimurhasan/rwc-final"
                    target="_blank"
                    className="btn btn-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
              <hr className="mx-2 bg-base-100" />
            </li>
            <li>
              <hr className="mx-2 bg-base-100" />
              <div className="timeline-middle">
                <FaCircle size={12} />
              </div>
              <div className="timeline-start mb-10 md:text-end space-y-2">
                <time className="font-mono italic">July, 2024</time>
                <div className="text-lg font-black">ShobShotej</div>
                <img src="shobshotej.png" alt="ShobShotej" className="rounded-2xl" />
                <p className="md:pl-10">
                  Learned how to force WordPress Plugins to do what I wanted — even when the feature
                  didn’t exist. My first ever introduction to JavaScript.
                </p>
                <div>
                  <a href="https://shobshotej.com/" target="_blank" className="btn btn-sm">
                    Explore <FaArrowRight />
                  </a>
                </div>
              </div>
              <hr className="mx-2 bg-base-100" />
            </li>
            <li>
              <hr className="mx-2 bg-base-100" />
              <div className="timeline-middle">
                <FaCircle size={12} />
              </div>
              <div className="timeline-end mb-10 md:text-start space-y-2">
                <time className="font-mono italic">May, 2024</time>
                <div className="text-lg font-black">Web Development Trainer</div>

                <iframe
                  className="rounded-2xl aspect-video"
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fweb.developer.tamim%2Fvideos%2F7563727837054855%2F&show_text=false&width=560&t=0"
                  width="100%"
                  height="100%"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Video"
                ></iframe>
                <p className="md:pr-10">
                  Got hired by{" "}
                  <a
                    href="https://web.facebook.com/mindskillssirajganj"
                    target="_blank"
                    className="link text-blue-500 hover:text-blue-600"
                  >
                    MindSkills
                  </a>{" "}
                  as an Instructor. Teaching beginner students was incredibly fun.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
