import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleImage = () => setImageOpen(!imageOpen);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 to-purple-900 p-3 h-[70px] shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-pink-400">&lt;Developer/&gt;</h2>
        
        <div className="hidden md:flex gap-6 text-white font-semibold">
          {["home", "about", "resume", "contact"].map((section) => (
            <Link 
              key={section} 
              to={section} 
              smooth={true} 
              duration={500} 
              className="bg-transparent text-white px-4 py-2 rounded cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <img 
            src="/profile.jpg" 
            alt="User" 
            className="w-10 h-10 rounded-full cursor-pointer" 
            onClick={toggleImage} 
          />
          <button 
            className="md:hidden text-white px-3 py-2 rounded"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
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
              className="bg-transparent text-white px-4 py-2 rounded w-full text-left cursor-pointer"
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {imageOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={toggleImage}
        >
          <img 
            src="/profile.jpg" 
            alt="User Fullscreen" 
            className="w-[90%] md:w-[50%] lg:w-[30%] rounded-full aspect-square shadow-lg" 
          />
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={toggleImage}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;