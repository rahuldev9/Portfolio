import React from "react";

const Resume = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5  h-screen items-center">
      <div className="flex flex-col text-left px-6 mt-10">
        <h1 className="text-4xl font-bold leading-tight">Resume</h1>
        <p className="text-gray-400 mt-4">
          <strong>Name : </strong>Rahul
        </p>
        <p className="text-gray-400 mt-4">
          <strong>Email : </strong>rahulmudavath333@gmail.com
        </p>
        <p className="text-gray-400 mt-4">
          <strong>Website : </strong>
          <a href="https://linktr.ee/urstrulyrahul">
          https://linktr.ee/urstrulyrahul
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-around ">
        <div>
          <h1 className="text-4xl font-bold leading-tight ml-6">Profile</h1>
          <p className="text-gray-400 m-6">
            I'm a web developer with a strong focus on both front-end design and
            backend development. I specialize in crafting visually appealing,
            responsive websites while building scalable and efficient
            server-side applications. My expertise includes Node.js, Express,
            MongoDB, and Python, enabling me to develop seamless,
            high-performance web solutions. I thrive on problem-solving and love
            turning ideas into functional, user-friendly digital experiences.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 ml-6">
          <a
            href="/Rahul_Resume.pdf"
            download="Rahul_Resume.pdf"
        
          >
            📄 Download Resume
          </a>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
