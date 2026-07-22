"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";

type Exp = {
  title: string;
  company: string;
  location?: string;
  duration?: string;
  url?: string;
};

type Props = { experiences?: Exp[] };

export default function ExperienceList({ experiences = [] }: Props) {
  const handleClick = (url?: string) => {
    if (!url || typeof window === "undefined") return;
    window.open(url);
  };

  if (!experiences.length) return null;

  return (
    <div
      className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-8"
      id="work"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            onClick={() => handleClick(exp.url)}
            className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors relative cursor-pointer"
          >
            <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <MoveUpRight className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-2 pr-8">
              {exp.title} @ {exp.company}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {exp.location} - {exp.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
