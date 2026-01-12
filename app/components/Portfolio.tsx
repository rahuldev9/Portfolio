"use client";

import React from "react";
import {
  MapPin,
  Linkedin,
  Mail,
  FileText,
  MoveUpRight,
  Code,
  Instagram,
  Github,
} from "lucide-react";
import { portfolioData } from "@/Data/portfolioData";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import LocationCard with SSR disabled
const LocationCard = dynamic(() => import("../components/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100 h-64 flex items-center justify-center">
      <div className="animate-pulse">
        <MapPin className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  ),
});

const BentoPortfolio = () => {
  const d = portfolioData;

  const handleClick = (url: string | undefined) => {
    if (!url || typeof window === "undefined") return;
    window.open(url);
  };

  return (
    <div className="h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ---- MAIN LAYOUT ---- */}
        <div className="lg:flex lg:gap-4">
          {/* ---- LEFT FIXED COLUMN ---- */}
          <div className="lg:w-4/12 space-y-4 lg:sticky lg:top-0 flex-1 items-center">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-8">
              <div className="flex flex-col items-center">
                <img
                  src={d.profileImage}
                  className="w-50 h-50 rounded-full mb-4 object-cover"
                  alt="profile"
                />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {d.name}
                </h1>
                <p className="sm:text-xl text-gray-600 text-center leading-relaxed">
                  {d.about}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center space-x-4 mt-4">
                <motion.span
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
                    target="_blank"
                  >
                    <Linkedin
                      className="text-gray-400 hover:text-blue-500 cursor-pointer"
                      size={30}
                    />
                  </Link>
                </motion.span>

                <motion.span
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="https://github.com/rahuldev9" target="_blank">
                    <Github
                      className="text-gray-400 hover:text-blue-500 cursor-pointer"
                      size={30}
                    />
                  </Link>
                </motion.span>
              </div>
            </div>
          </div>

          {/* ---- RIGHT SCROLLABLE COLUMN ---- */}
          <div className="lg:w-8/12 space-y-4 lg:h-screen lg:overflow-y-scroll pr-2 pt-10 bg-white">
            {/* Social Boxes */}
            <div className="w-full max-w-4xl mx-auto p-4">
              {/* Top Row - 3 Cards (LinkedIn, Email, Resume) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {/* LinkedIn Card */}
                <a
                  href={d.socialLinks[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 rounded-3xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-start">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-1">
                      {d.socialLinks[0]?.label || "Awiksshiith Narang"}
                    </p>
                    <p className="text-sm text-gray-600">linkedin.com</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${d.socialLinks[1]?.url}`}
                  className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col items-start">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                      <Mail className="w-7 h-7 text-gray-700" />
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-1">
                      Personal email
                    </p>
                    <p className="text-sm text-gray-600">gmail.com</p>
                  </div>
                </a>

                {/* Resume Card */}
                <a
                  href={d.socialLinks[2]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col items-start">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="w-10 h-10"
                        >
                          {/* Left green segment */}
                          <path
                            fill="#0F9D58"
                            d="M15.4 8L2 31.4l7.7 13.3L23 21.3z"
                          />
                          {/* Right yellow segment */}
                          <path fill="#F4B400" d="M32.6 8H15.4L23 21.3h17.2z" />
                          {/* Bottom blue segment */}
                          <path
                            fill="#4285F4"
                            d="M23 21.3L9.7 44.7H38.3L23 21.3z"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-base font-semibold text-gray-900 mb-1">
                      View My Resume
                    </p>
                    <p className="text-sm text-gray-600">drive.google.com</p>
                  </div>
                </a>
              </div>

              {/* Bottom Row - 2 Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Column - Location + Instagram */}
                <div className="space-y-4">
                  {/* Location Card */}
                  <LocationCard
                    location={d.location}
                    coords={d.education.coords}
                  />

                  {/* Instagram Card */}
                  {/* <a
                    href={d.socialLinks[4]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100 block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                        <Instagram className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded bg-gradient-to-br from-purple-100 to-pink-100"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-base font-semibold text-gray-900">
                      {d.socialLinks[4]?.label}
                    </p>
                  </a> */}
                </div>

                {/* Right Column - GitHub */}
                <a
                  href={d.socialLinks[3]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mb-6">
                    <Github className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {d.socialLinks[3]?.label || "CodeAlchemyML"}
                  </p>
                  {/* GitHub contribution graph (larger) */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        {[...Array(7)].map((_, j) => (
                          <div
                            key={j}
                            className={`w-2.5 h-2.5 rounded-sm ${
                              Math.random() > 0.7
                                ? "bg-green-500"
                                : Math.random() > 0.5
                                ? "bg-green-300"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 px-8 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm rounded-xl font-semibold transition-colors">
                    Follow
                  </button>
                </a>
              </div>
            </div>

            {/* Education */}
            <div
              className="bg-white rounded-3xl p-8 cursor-pointer"
              onClick={() => handleClick(d.education.url)}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Education
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 relative hover:bg-gray-100 ">
                <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <MoveUpRight className="h-4 w-4 text-white" />
                </div>

                <h3 className="font-semibold text-base text-gray-900 mb-2 pr-8">
                  {d.education.degree} @ {d.education.school}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {d.education.location}
                </p>
                <p className="text-sm text-gray-600">{d.education.duration}</p>
              </div>
            </div>

            {/* Experience */}
            {d.experiences && (
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {d.experiences?.map((exp, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors relative"
                    >
                      <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 rounded-full"></div>
                      <h3 className="font-semibold text-base text-gray-900 mb-2 pr-8">
                        {exp.title} @ {exp.company}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {exp.location} - {exp.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
              <div className="space-y-4">
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">Languages:</span>{" "}
                  {d.languages.join(", ")}
                </p>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">Techstack:</span>{" "}
                  {d.techstack.join(", ")}
                </p>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">Tools:</span>{" "}
                  {d.tools.join(", ")}
                </p>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">Frameworks:</span>{" "}
                  {d.frameworks.join(", ")}
                </p>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">Databases:</span>{" "}
                  {d.databases.join(", ")}
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {d.projects.map((p, i) => {
                  const [expanded, setExpanded] = React.useState(false);
                  const limit = 120;
                  const isLong = p.description.length > limit;

                  return (
                    <div
                      key={i}
                      onClick={() => handleClick(p.GitHubUrl)}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors relative cursor-pointer"
                    >
                      <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <MoveUpRight className="h-4 w-4 text-white" />
                      </div>

                      <h3 className="font-semibold text-base text-gray-900 mb-2 pr-8">
                        {p.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {expanded
                          ? p.description
                          : p.description.slice(0, limit)}

                        {isLong && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpanded(!expanded);
                            }}
                            className="text-blue-600 ml-2 cursor-pointer"
                          >
                            {expanded ? "Show less" : "...See more"}
                          </button>
                        )}
                      </p>

                      <p className="font-semibold text-base text-gray-900 mt-3 pr-8">
                        {p.tags}
                      </p>
                      <div className="flex flex-row justify-end">
                        {/* GitHub */}
                        {p.GitHubUrl && (
                          <a
                            href={`${p.GitHubUrl}`}
                            className=" rounded-2xl p-4 flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                              <Github className="w-4 h-4 text-gray-700" />
                            </div>
                          </a>
                        )}
                        {/* LinkedIn */}
                        {p.LinkedInUrl && (
                          <a
                            href={p.LinkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-2xl p-4 flex flex-col items-center justify-center"
                          >
                            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center mb-2">
                              <Linkedin className="w-4 h-4 text-white" />
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoPortfolio;
