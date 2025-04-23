import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm proficient in Python, C, and Java, but my true passion lies in{" "}
            <span className="text-blue-400 font-semibold">web design</span>. I
            love transforming creative ideas into visually engaging, responsive
            websites that provide amazing user experiences. I’m constantly
            learning and pushing myself to design interfaces that not only look
            good but feel great to use.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col space-y-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <p className="text-gray-400">
            Any type of question & discussion — feel free to reach out!
          </p>
          <hr className="border-gray-700 w-1/3" />

          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:rahulmudavath333@gmail.com"
                className="text-blue-300 hover:underline"
              >
                rahulmudavath333@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-pink-400" />
              <a
                href="https://www.instagram.com/urstrulyrahul_09"
                className="text-pink-300 hover:underline"
              >
                @urstrulyrahul_09
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/919494171574"
                className="text-green-300 hover:underline"
              >
                +91 9494171574
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
