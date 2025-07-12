import React from "react";
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h3 className="text-center py-6 text-2xl font-light">
        Experience <span className="text-primary">I Have</span>
      </h3>
      <div className="max-w-5xl mx-auto px-4">
        <ul className="timeline text-base timeline-box max-md:timeline-compact timeline-vertical px-10 py-6">
          <li>
            <div className="timeline-middle">
              <FaCircle size={12} />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">April, 2025</time>
              <div className="text-lg font-black">Paikari Organic Ghor</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos illo voluptas qui
                quis temporibus, natus sunt eligendi! Deserunt, dolorem similique?
              </p>
              <div className="my-1">
                <button className="btn btn-sm">Live Site</button>
              </div>
            </div>
            <hr className="mx-2" />
          </li>
          <li>
            <hr className="mx-2" />
            <div className="timeline-middle">
              <FaCircle size={12} />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">November, 2024</time>
              <div className="text-lg font-black">Govt. Rashidozzoha Women's College</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos illo voluptas qui
                quis temporibus, natus sunt eligendi! Deserunt, dolorem similique?
              </p>
              <div className="my-1 space-x-1">
                <button className="btn btn-sm">Live</button>
                <button className="btn btn-sm">Code</button>
              </div>
            </div>
            <hr className="mx-2" />
          </li>
          <li>
            <hr className="mx-2" />
            <div className="timeline-middle">
              <FaCircle size={12} />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">July, 2024</time>
              <div className="text-lg font-black">ShobShotej</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur, tenetur
                delectus quibusdam sapiente amet quaerat repudiandae alias molestias sit?
              </p>
              <div className="my-1">
                <button className="btn btn-sm">Live Site</button>
              </div>
            </div>
            <hr className="mx-2" />
          </li>
          <li>
            <hr className="mx-2" />
            <div className="timeline-middle">
              <FaCircle size={12} />
            </div>
            <div className="timeline-end mb-10 md:text-start">
              <time className="font-mono italic">April, 2024</time>
              <div className="text-lg font-black">Wordpress Instructor</div>
              
              <iframe
                className="rounded-2xl"
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur, tenetur
                delectus quibusdam sapiente amet quaerat repudiandae alias molestias sit?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
