import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="px-6 py-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2 className="text-4xl font-bold mb-10">Education</h2>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <motion.div
          className="hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            BE, Electronics and Communication Engineering
          </h3>

          <p className="text-lg text-gray-400 mb-1">
            Osmania University, Hyderabad, India
          </p>
          <p className="text-sm text-gray-500 mb-1">2021 - 2025</p>
          <p className="text-sm text-gray-500 mb-2">
            GPA: 7.7/10 (Till 7th semester)
          </p>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Volunteering:
            </h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Member of the IEEE Student Chapter</li>
              <li>Volunteer at IETE Technical Symposium</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
