import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp,FaLinkedinIn } from "react-icons/fa";

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
          <motion.p whileHover={{ scale: 1.02 }} className="text-gray-400 ">
        I'm a <span className="text-gray-400 ">passionate and versatile Web Developer</span> specializing in the{" "}
        <span className="text-teal-400 font-medium">MERN stack</span> (MongoDB, Express.js, React.js, and Node.js),
        with a strong foundation in building scalable,
        responsive, and high-performance web applications.
        I enjoy turning complex problems into clean, intuitive user experiences.
      </motion.p>

      <motion.p whileHover={{ scale: 1.02 }}  className="text-gray-400 ">
        Beyond full-stack development, I’m also exploring the cutting edge of{" "}
        <span className="text-violet-400 font-medium">Generative AI</span>, applying tools like{" "}
        <span className="text-blue-300 font-semibold">OpenAI</span> and other LLMs to build smart, interactive features—
        from <span className="italic">chatbots</span> to <span className="italic">content generation systems</span>.
        I thrive on blending traditional web development with AI to craft <span className="text-gray-400">future-ready digital experiences</span>.
      </motion.p>
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
              <FaLinkedinIn className="text-blue-600 " />
              <a
                href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
                className="text-blue-600 hover:underline"
              >
                Rahul Mudavath
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
