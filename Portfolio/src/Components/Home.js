import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" text-white max-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols md:grid-cols gap-10 px-6 md:px-16 py-10 items-center justify-items-center">
        <div className="flex flex-col justify-center text-center md:text-left">
          <motion.img
            src="/profile.jpg"
            alt="Rahul"
            className="w-36 h-36 rounded-full border-4 border-purple-500 cursor-pointer mb-6 md:mb-0 mx-auto md:mx-0 mt-10 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          <motion.h1
            className="text-4xl font-semibold leading-tight mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Mudavath Rahul
          </motion.h1>

          <motion.h1
            className="text-3xl font-semibold leading-tight mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-blue-500">MERN Stack Developer</span>
          </motion.h1>

          <div className="flex justify-center md:justify-start items-center mb-6  space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <FaLinkedinIn
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
                size={30}
              />
            </motion.a>
            <motion.a
              href="https://github.com/rahuldev9"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <FaGithub
                className="text-gray-400 hover:text-white cursor-pointer"
                size={30}
              />
            </motion.a>
          </div>
          <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
  <Link to="about" smooth={true} duration={500} className="w-full sm:w-auto">
    <motion.button
      aria-label="Scroll to About Section"
      className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg flex justify-center items-center gap-2 text-sm sm:text-base"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <span>🚀 Let’s Go</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
        />
      </svg>
    </motion.button>
  </Link>

  <Link to="projects" smooth={true} duration={500} className="w-full sm:w-auto">
    <motion.button
      aria-label="Scroll to Projects Section"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="w-full sm:w-auto px-6 sm:px-10 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 shadow-md flex justify-center items-center gap-2 text-sm sm:text-base"
    >
      <span>View Projects</span>
    </motion.button>
  </Link>
</motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
