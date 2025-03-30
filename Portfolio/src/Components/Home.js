import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,

} from "react-icons/fa";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5  h-screen items-center">
      <div className="flex flex-col text-left px-6 mt-10">
        <h1 className="text-4xl font-bold leading-tight">
          I'm Rahul, a <span className="text-blue-500">Web Developer</span>
        </h1>
        <p className="text-gray-400 mt-4">
          As a Junior Developer specializing in modern and responsive designs
          for both web and mobile, I'm eager to collaborate with you. Let’s
          create stunning, user-friendly interfaces together. Thank you!
        </p>
        <div className="mt-6">
        <Link to="about" smooth={true} duration={500}>
  <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
    Let's Go →
  </button>
</Link>
          

        </div>
        <div className="flex space-x-4 mt-6">
        <a href="https://www.linkedin.com/in/rahul-mudavath-848978301/"><FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" /></a>
        <a href="https://www.instagram.com/urstrulyrahul_09"><FaInstagram className="text-gray-400 hover:text-white cursor-pointer" /></a>
        <a href="https://github.com/rahuldev9"><FaGithub className="text-gray-400 hover:text-white cursor-pointer" /></a>
          
        </div>
      </div>
      <div className="flex flex-col justify-around ">
        <div >
          <h3 className="font-bold leading-tight px-6">ABOUT ME</h3>
          <p className="text-gray-400 m-6">
            I am currently pursuing a Bachelor of Engineering in Electronics and
            Communication Engineering from Matrusri Engineering College.
          </p>
          <div className="mt-6">
            <Link to="about" smooth={true} duration={500}><button className="px-6 py-3 text-white rounded-full  ">
              See More →
            </button></Link>
            
          </div>
        </div>
        <div>
          <h3 className="font-bold leading-tight px-6">MY WORK</h3>
          <p className="text-gray-400 m-6">
          I'm a web developer skilled in designing modern websites and building powerful backend Solutions.
          </p>
          <div className="mt-6">
          <Link to="resume" smooth={true} duration={500}><button className="px-6 py-3 text-white rounded-full  ">
              See More →
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
