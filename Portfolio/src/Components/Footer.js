import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Mudavath Rahul</h2>
          <p className="text-sm mt-1">
            MERN Stack Developer | Generative AI Enthusiast
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/rahuldev9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-6">
        © {new Date().getFullYear()} Rahul Mudavath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
