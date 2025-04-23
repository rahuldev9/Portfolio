import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const groupedSkills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
    ],
  },
  {
    title: "User Interface Mastery",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
  },
  {
    title: "Server Technologies",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      className="px-6 py-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2 className="text-4xl font-bold mb-10">Skills & Technologies</h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {groupedSkills.map((group, i) => (
          <div key={i}>
            <motion.h3
              className="text-2xl font-semibold mb-6 text-blue-400"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              {group.title}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
