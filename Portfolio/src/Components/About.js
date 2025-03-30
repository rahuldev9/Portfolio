import React from 'react'


const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="flex flex-col text-left px-6 mt-10">
        <h1 className="text-3xl font-bold leading-tight">
          Any type of question & Discussion
        </h1>
        <p className="text-gray-400 mt-4">
          Let's Talk <span><hr></hr></span>
        </p>
        <h1 className="text-1xl font-bold leading-tight mt-3"><a href="mailto:rahulmudavath333@gmail.com" className="text-blue-300 hover:underline">rahulmudavath333@gmail.com</a></h1>
        <h1 className="text-1xl font-bold leading-tight mt-3">Insta : <a href="https://www.instagram.com/urstrulyrahul_09" className="text-purple-300 hover:underline">urstrulyrahul_09</a></h1>
        <h1 className="text-1xl font-bold leading-tight mt-3">Whatsapp : <a href="https://wa.me/919494171574" className="text-green-300 hover:underline">+91 9494171574</a></h1>

      </div>
      <div className="flex flex-col justify-around ">
        <div>
          <h2 className=" text-3xl font-bold leading-tight px-6">ABOUT ME</h2>
          <p className="text-gray-400 m-6">
          I am currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering from Matrusri Engineering College. I am good at programming languages like Python, C, Java.
My true passion lies in web design. I thrive on bringing creative ideas to life through visually stunning and responsive websites that deliver exceptional user experiences.
          </p>
          
        </div>
        
      </div>
    </div>
  )
}

export default About
