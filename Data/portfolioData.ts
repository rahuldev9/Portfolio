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
  url: string;
  duration: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string;
  url?: string;
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
  summary: string;
  location: string;
  phone: string;

  socialLinks: SocialLink[];

  languages: string[];
  techstack: string[];
  tools: string[];
  frameworks: string[];
  databases: string[];

  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem;

  certifications: CertificationItem[];
  memberships: string[];
}
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

// ---------- DATA ----------

export const portfolioData: PortfolioData = {
  name: "Mudavath Rahul",
  profileImage: "/Rahul.jpg",

  summary:
    "Software Engineer with hands-on experience in full-stack web development and Generative AI. Strong foundation in scalable web applications, REST APIs, and collaborative product development. Experienced in building production-grade features at startups.",

  about:
    "Gen AI | Full-Stack Developer | MERN Stack | Python • ReactJS • Node.js • LLMs • RAG • NextJS | N8N Automation | Ex-IIITDM Intern | ECE ’25 @ OU",

  location: "Hyderabad, Telangana, India",
  phone: "+91 9494171574",

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
      url: "https://drive.google.com/file/d/1U-S9GZbXT5jbOpQ47nTxzCU7fVJg0pOj/view",
      icon: "resume",
    },
    {
      label: "rahuldev9",
      url: "https://github.com/rahuldev9",
      icon: "github",
    },
    {
      label: "urstrulyrahul_09",
      url: "https://www.instagram.com/urstrulyrahul_09",
      icon: "instagram",
    },
  ],

  languages: ["C", "Python", "HTML", "CSS", "JavaScript", "PHP"],
  techstack: [
    "Full Stack Development",
    "Generative AI",
    "Agentic AI",
    "Automation",
    "REST APIs",
    "Backend Development",
  ],
  tools: ["Git", "GitHub", "VS Code", "N8N Automation", "claude.ai", "chatgpt"],
  frameworks: [
    "React JS",
    "Next JS",
    "Tailwind CSS",
    "Flask",
    "FastAPI",
    "Express.js",
  ],
  databases: ["MongoDB", "PostgreSQL (Supabase)", "MySQL"],

  experiences: [
    {
      title: "Software Engineer",
      company: "Cynchrony",
      location: "Hyderabad, India",
      url: "https://cynchrony.in",
      duration: "Jul 2025 – Present",
      description: [
        "Developing and scaling production-grade full-stack features for cynchrony.in",
        "Building responsive UIs using Next.js and Tailwind CSS",
        "Implementing backend logic and APIs using Python",
        "Collaborating closely with product and engineering teams",
      ],
    },
    {
      title: "Research Intern – Quantum Cellular Automata (QCA)",
      company: "IIITDM Kancheepuram",
      location: "Chennai, India",
      url: "https://www.iiitdm.ac.in",
      duration: "May 2024 – Jun 2024",
      description: [
        "Worked on computational models based on Quantum Cellular Automata",
        "Conducted research and simulations for advanced computing architectures",
      ],
    },
  ],

  projects: [
    {
      title: "SpyroSphere (B.E. Major Project)",
      url: "https://spyro-sphere.vercel.app",
      description:
        "A spherical surveillance robot with pendulum-based drive system, ESP32-CAM live video streaming, and an AI-powered chatbot that explains robot features in real time.",
      tags: "React, Node.js, Tailwind CSS, ESP32, Gemini API, LangChain, RAG",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_engineeringinnovation-surveillancerobot-aichatbot-activity-7346904333327773697-H75l",
      GitHubUrl: "https://github.com/rahuldev9/SpyroSphere",
    },
    {
      title: "ImaginAI",
      description:
        "AI-powered web application that generates images from text and voice prompts using Hugging Face Diffusers. Integrated NLP and image generation pipelines.",
      tags: "React, Node.js, Tailwind CSS, Hugging Face",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_genai-voicetoimage-huggingface-activity-7326610576506253314-vzFO",
      GitHubUrl: "https://github.com/rahuldev9/ImaginAI",
    },
    {
      title: "ScoreSync",
      description:
        "Full-stack live cricket scoring application inspired by Cricbuzz with team creation, match scheduling, and real-time score updates.",
      tags: "React, Node.js, Express.js, MongoDB",
      GitHubUrl: "https://github.com/rahuldev9/ScoreSync",
    },
    // {
    //   title: "HireNexa – AI-Driven Recruitment Management System",
    //   url: "https://hirenexa.infinityfreeapp.com",
    //   description:
    //     "Developed HireNexa, a full-stack recruitment platform using PHP (MVC), MySQL, JavaScript, Tailwind CSS, and Razorpay API, featuring job management, technical assessments, real-time proctoring, authentication, role-based access control, in-app chat, subscriptions, analytics, and an admin dashboard.",
    //   tags: "PHP (MVC), MySQL, JavaScript, Tailwind CSS",
    //   LinkedInUrl: "https://www.linkedin.com/in/rahul-mudavath-848978301/",
    //   GitHubUrl: "https://github.com/rahuldev9/hirenexa",
    // },
    {
      title: "NearBuzz",
      url: "https://github.com/rahuldev9/NearBuzz",
      description:
        "NearBuzz is a full-stack event discovery and booking platform that enables users to create, discover, and book nearby events effortlessly. Built with React Native (Expo), Node.js, Express.js, and MongoDB, it features secure JWT authentication, event and profile management, slot booking, and AI-powered event generation, with an intelligent AI assistant currently under development.",
      tags: "React Native (Expo), JavaScript, Node.js, Express.js, MongoDB, AI Integration",
      LinkedInUrl:
        "https://www.linkedin.com/posts/rahul-mudavath-848978301_nearbuzz-reactnative-expo-activity-7476948732585029632-pmht?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01LbgBD59i-E1DDhOdAWTa29R7QKhBu8E",
      GitHubUrl: "https://github.com/rahuldev9/NearBuzz",
    },
  ],

  education: {
    degree: "B.E. in Electronics and Communication Engineering",
    school: "Osmania University",
    location: "Hyderabad, Telangana, India",
    duration: "2021 – 2025",
    url: "https://matrusri.edu.in",
    coords: [17.256279, 78.597007],
  },

  certifications: [
    {
      title: "Embedded Systems Developer",
      issuer: "AICTE",
    },
    {
      title: "Certificate of Merit – IGNIUM 2022",
      issuer: "ISTE",
      year: "2022",
    },
  ],

  memberships: [
    "Member, IEEE (Institute of Electrical and Electronics Engineers)",
    "Volunteer, IETE (Institution of Electronics and Telecommunication Engineers)",
  ],
};
