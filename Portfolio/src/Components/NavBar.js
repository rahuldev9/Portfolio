import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-br from-black to-gray-900 p-3 h-[70px] shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
          Rahul
        </motion.h2>

        <motion.div className="hidden md:flex gap-6 text-white font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
          {["home", "about", "resume", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </motion.div>

        {showIcons && (
          <div className="flex justify-center md:justify-start items-center space-x-4 ">
            <motion.a
              href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedinIn
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
                size={30}
              />
            </motion.a>
            <motion.a
              href="https://github.com/rahuldev9"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub
                className="text-gray-400 hover:text-white cursor-pointer"
                size={30}
              />
            </motion.a>
          </div>
        )}

        <motion.div className="flex items-center gap-4 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
          <button
            className="text-white px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeMenu}
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="flex flex-col items-start p-6 mt-10 space-y-4">
          {["home", "about", "resume", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-white px-4 py-2 rounded-md w-full text-left cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
