import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaBriefcase,FaLinkedinIn} from "react-icons/fa";

const projects = [
  {
    title: "SpyroSphere",
    description:
      "A spherical surveillance robot with live video streaming, mobile control, and an AI-powered chatbot that explains its features in real time.",
    moreInfo:
      "A surveillance robot housed inside a spherical shell, driven by an internal pendulum mechanism for smooth motion. Integrated with an ESP32-CAM for live video streaming and a mobile app for control, the system also features a custom-built AI chatbot that answers queries about the robot's design, components, and functionality—making it both innovative and user-friendly.",
    techStack: "React, Node.js, Tailwind CSS,Gemini API",
    github: "https://github.com/rahuldev9/SpyroSphere",
    linkedin:"https://www.linkedin.com/posts/rahul-mudavath-848978301_engineeringinnovation-surveillancerobot-aichatbot-activity-7346904333327773697-H75l?utm_source=share&utm_medium=member_android&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E"
  },
  {
    title: "ImaginAI",
    description:
      "Geni AI is an AI-powered web application that allows users to generate images from text prompts and voice recordings.",
    moreInfo:
      "Built using React for the frontend and Node.js for the backend, the app integrates Hugging Face models to bring natural language understanding and image generation capabilities to life.",
    techStack: "React, Node.js, Tailwind CSS, Hugging Face Diffusers",
    github: "https://github.com/rahuldev9/ImaginAI",
    linkedin:"https://www.linkedin.com/posts/rahul-mudavath-848978301_engineeringinnovation-surveillancerobot-aichatbot-activity-7346904333327773697-H75l?utm_source=share&utm_medium=member_android&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E"
  },
  {
    title: "ScoreSync",
    description:
      "ScoreSync is a full-stack live cricket score tracking application. It allows users to create cricket teams with custom names and logos, add players, schedule matches between teams, and update live scores. ",
    moreInfo:
      "Inspired by platforms like Cricbuzz, ScoreSync provides a seamless experience for both hosts (score managers) and viewers.",
    techStack: "React, Node.js, Tailwind CSS,MongoDB DataBase",
    github: "https://github.com/rahuldev9/ScoreSync",
  },
  {
    title: "TicTacToe",
    description:
      "This project is a modern, web-based multiplayer Tic-Tac-Toe game designed to deliver a smooth and interactive experience.",
    moreInfo:
      "Built with React.js for the front-end, Node.js for the backend server, and Socket.io for real-time communication, it enables players to connect, compete, and chat in real-time from anywhere in the world.",
    techStack: "React, Node.js",
    github: "https://github.com/rahuldev9/TicTacToe",
    linkedin:"https://www.linkedin.com/posts/rahul-mudavath-848978301_reactjs-nodejs-socketio-activity-7316852975904182272-7cvn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E"
  },
  {
    title: "Dishcovery",
    description:
      "Dishcovery helps you turn the ingredients in your fridge into endless delicious recipes using cutting-edge technology and data-driven insights.",
    moreInfo:
      "Whether you're a seasoned home chef or a busy professional, Dishcovery makes mealtime effortless and enjoyable.",
    techStack: "React, Node.js",
    github: "https://github.com/rahuldev9/Dishcovery",
    linkedin:"https://www.linkedin.com/posts/rahul-mudavath-848978301_foodtech-cookingmadeeasy-innovationincooking-activity-7284778425439977472-9RK3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E"
  },
];

const ProjectDetails = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const toggleReadMore = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <motion.div
      className="px-6 py-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-blue-600 text-xl animate-pulse" />
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>

          <p className="text-gray-400 text-sm mb-2">{project.techStack}</p>

          <p className="text-gray-300">
            {project.description}
            {expanded[index] && <span> {project.moreInfo}</span>}
          </p>

          <button
            onClick={() => toggleReadMore(index)}
            className="mt-3 text-blue-500 hover:underline focus:outline-none"
          >
            {expanded[index] ? "Show less" : "Read more"}
          </button>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2 transition"
            >
              < FaLinkedinIn/> LinkedIn
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectDetails;
