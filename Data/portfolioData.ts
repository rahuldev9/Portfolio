// ---------- Types ----------

export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "email" | "resume" | "github" | "instagram";
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string;
  GitHubUrl?: string;
  LinkedInUrl?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
  url: string;
  coords: [number, number];
}

export interface PortfolioData {
  name: string;
  profileImage: string;
  about: string;
  location: string;

  socialLinks: SocialLink[];

  languages: string[];
  techstack: string[];
  tools: string[];
  frameworks: string[];
  databases: string[];
  experiences?: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem;
}

// ---------- DATA ----------

export const portfolioData: PortfolioData = {
  name: "Mudavath Rahul",
  profileImage: "/Rahul.jpg",

  about:
    "Gen AI | Full-Stack Developer | MERN Stack | Python • ReactJS • Node.js • LLMs • RAG • NextJS| N8N Automation | Ex-IIITDM Intern | ECE ’25 @ OU",

  location: "Hyderabad, Telangana, India",

  socialLinks: [
    {
      label: "Mudavath Rahul",
      url: "https://www.linkedin.com/in/rahul-mudavath-848978301",
      icon: "linkedin",
    },
    {
      label: "rahulmudavath333@gmail.com",
      url: "mailto:rahulmudavath333@gmail.com",
      icon: "email",
    },
    {
      label: "View My Resume",
      url: "https://drive.google.com/file/d/1Be3pPV-FYPma7-XwefmM4pJfLW49DkVL/view?usp=sharing",
      icon: "resume",
    },
    {
      label: "RahulDev9",
      url: "https://github.com/rahuldev9",
      icon: "github",
    },
    {
      label: "urstrulyrahul_09",
      url: "https://www.instagram.com/urstrulyrahul_09?igsh=Y2VudWNtZnpsczZq",
      icon: "instagram",
    },
  ],

  languages: ["C", "Python", "HTML", "CSS", "JavaScript", "Node", "express JS"],
  techstack: [
    "Full Stack Development",
    "Generative AI",
    "Automation",
    "Agentic AI",
    "Backend (Flask & FastAPI)",
  ],
  tools: ["Git/GitHub", "VS Code", "N8N Automation"],
  frameworks: ["React JS", "Next JS", "Tailwind CSS", "Flask", "FastAPI"],
  databases: ["MongoDB", "PostgreSQL (via Supabase)"],
  //   experiences: [
  //     {
  //       title: "Machine Learning Engineer",
  //       company: "Quantrium",
  //       location: "Remote",
  //       duration: "(Jul. 2025 - Present)",
  //     },
  //     {
  //       title: "Machine Learning Engineer Intern",
  //       company: "Quantrium",
  //       location: "Remote",
  //       duration: "(Jan. 2025 - Jul. 2025)",
  //     },
  //     {
  //       title: "AI/ML & Python Backend Developer Intern",
  //       company: "Around Me",
  //       location: "Hyderabad",
  //       duration: "(Jun. 2024 - Dec. 2024)",
  //     },
  //     {
  //       title: "Research Intern",
  //       company: "IIITDM K",
  //       location: "Chennai",
  //       duration: "(Oct. 2023 - Jun. 2024)",
  //     },
  //   ],

  projects: [
    {
      title: "SpyroSphere",
      description:
        "A spherical surveillance robot with live video streaming, mobile control, and an AI-powered chatbot that explains its features in real time. A surveillance robot housed inside a spherical shell, driven by an internal pendulum mechanism for smooth motion. Integrated with an ESP32-CAM for live video streaming and a mobile app for control, the system also features a custom-built AI chatbot that answers queries about the robot's design, components, and functionality—making it both innovative and user-friendly.",
      tags: "React, Node.js, Tailwind CSS,Gemini API",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_engineeringinnovation-surveillancerobot-aichatbot-activity-7346904333327773697-H75l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E",
      GitHubUrl: "https://github.com/rahuldev9/SpyroSphere",
    },
    {
      title: "ImaginAI",
      description:
        "Geni AI is an AI-powered web application that allows users to generate images from text prompts and voice recordings. Built using React for the frontend and Node.js for the backend, the app integrates Hugging Face models to bring natural language understanding and image generation capabilities to life.",
      tags: "React, Node.js, Tailwind CSS, Hugging Face Diffusers",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_genai-voicetoimage-huggingface-activity-7326610576506253314-vzFO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E",
      GitHubUrl: "https://github.com/rahuldev9/ImaginAI",
    },
    {
      title: "ScoreSync",
      description:
        "ScoreSync is a full-stack live cricket score tracking application. It allows users to create cricket teams with custom names and logos, add players, schedule matches between teams, and update live scores. Inspired by platforms like Cricbuzz, ScoreSync provides a seamless experience for both hosts (score managers) and viewers.",
      tags: "React, Node.js, Tailwind CSS,MongoDB DataBase",
      //   LinkedInUrl: "",
      GitHubUrl: "https://github.com/rahuldev9/ScoreSync",
    },
    {
      title: "TicTacToe",
      description:
        "This project is a modern, web-based multiplayer Tic-Tac-Toe game designed to deliver a smooth and interactive experience. Built with React.js for the front-end, Node.js for the backend server, and Socket.io for real-time communication, it enables players to connect, compete, and chat in real-time from anywhere in the world.",
      tags: "React, Node.js",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_reactjs-nodejs-socketio-activity-7316852975904182272-7cvn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E",
      GitHubUrl: "https://github.com/rahuldev9/TicTacToe",
    },
  ],

  education: {
    degree: "BE, Electronics and Communication Engineering",
    school: "Osmania University",
    location: "Hyderabad, Telangana, India",
    duration: "(2021 - 2025)",
    url: "https://matrusri.edu.in",
    coords: [17.256279, 78.597007],
  },
};
