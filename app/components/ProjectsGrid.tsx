"use client";

import React, { useState } from "react";
import { MoveUpRight, Link2, Github, Linkedin } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags?: string;
  url?: string;
  GitHubUrl?: string;
  LinkedInUrl?: string;
};

type Props = { projects: Project[] };

function ProjectCard({ p }: { p: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const limit = 120;
  const isLong = p.description.length > limit;

  const handleClick = (url?: string) => {
    if (!url || typeof window === "undefined") return;
    window.open(url, "_blank");
  };

  const previewUrl = p.url || p.GitHubUrl;

  return (
    <div
      onClick={() => handleClick(p.GitHubUrl || p.url)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:z-30 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700/80 flex flex-col justify-between"
    >
      {/* Top Right External Arrow */}
      <div className="absolute top-4 right-4 w-7 h-7 bg-gray-200/80 dark:bg-slate-700/80 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
        <MoveUpRight className="h-4 w-4 text-slate-700 dark:text-slate-200" />
      </div>

      <div>
        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2 pr-8">
          {p.title}
        </h3>

        {/* Live Website Preview Container */}
        {previewUrl && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out rounded-xl my-3 ${
              isHovered ? "max-h-80 opacity-100 mb-4" : "max-h-0 opacity-0 my-0"
            }`}
          >
            <div
              /* Stop card navigation click when interacting inside iframe container */
              onClick={(e) => e.stopPropagation()}
              className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950"
            >
              <iframe
                src={previewUrl}
                title={`${p.title} preview`}
                loading="lazy"
                /* Removed pointer-events-none and tabIndex={-1} to allow direct user interaction */
                className="absolute top-0 left-0 w-[950px] h-[720px] origin-top-left scale-[0.3] md:scale-[0.35] rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Card Content */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {expanded ? p.description : p.description.slice(0, limit)}

          {isLong && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="text-blue-600 dark:text-blue-400 font-medium ml-1.5 hover:underline focus:outline-none"
            >
              {expanded ? "Show less" : "...See more"}
            </button>
          )}
        </p>

        {p.tags && (
          <p className="font-medium text-xs tracking-wide text-blue-600 dark:text-blue-400 mt-3 uppercase">
            {p.tags}
          </p>
        )}
      </div>

      {/* Action Links */}
      <div className="flex flex-row justify-end items-center gap-1 mt-4 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            title="Live Demo"
          >
            <Link2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </a>
        )}
        {p.GitHubUrl && (
          <a
            href={p.GitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </a>
        )}
        {p.LinkedInUrl && (
          <a
            href={p.LinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            title="LinkedIn Post"
          >
            <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div
      id="projects"
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects.map((p, i) => (
          <ProjectCard key={p.title || i} p={p} />
        ))}
      </div>
    </div>
  );
}
