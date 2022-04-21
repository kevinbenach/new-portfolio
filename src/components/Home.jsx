import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kevin Benach
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a passionate Software Developer specialized in the front end
          field. Currently, I'm focused on building responsive web apps using
          React.
        </p>
        <div className="flex ">
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              <Link to="work" smooth={true} duration={500}>
                View Projects
              </Link>
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </div>
          <div className="px-6">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              <a
                href="https://drive.google.com/file/d/1GLKTPi5nQYJnovDIVFWTiDVNVDWR7O-o/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
