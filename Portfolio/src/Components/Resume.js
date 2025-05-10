import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaBriefcase } from "react-icons/fa";
import Skills from "./Skills";
import Education from "./Education";

const Resume = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white ">
      <div className="flex flex-col items-center justify-center px-6 text-center mb-10 ">
        
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
          <Education />
        </motion.div>
        <Skills />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-gray-800 rounded-2xl p-8 md:p-12 mt-10 shadow-xl max-w-3xl w-full"
        >
          <h1 className="text-4xl font-bold leading-tight mb-4 flex items-center justify-center gap-2">
            <FaBriefcase className="text-blue-500" />
            Profile
          </h1>

          <p className="text-gray-300 mb-6 hover:text-white transition duration-300">
            I'm a web developer with a strong focus on both front-end design and
            backend development. I specialize in crafting visually appealing,
            responsive websites while building scalable and efficient
            server-side applications. My expertise includes Node.js, Express,
            MongoDB, and Python. I thrive on problem-solving and love turning
            ideas into functional, user-friendly digital experiences.
          </p>

          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFileDownload />
            <a href="/Rahul_Resume.pdf" download="Rahul_Resume.pdf">
              Download Resume
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
