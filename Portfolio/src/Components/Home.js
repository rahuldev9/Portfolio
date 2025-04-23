import React from "react";
import {  FaLinkedinIn, FaGithub } from "react-icons/fa";
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

          <div className="mt-8">
            <Link to="about" smooth={true} duration={500}>
              <motion.button
                className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
                viewport={{ once: false }}
              >
                Let's Go →
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
