"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";

type Edu = {
  degree: string;
  school: string;
  location?: string;
  duration?: string;
  url?: string;
};

type Props = { education: Edu };

export default function EducationCard({ education }: Props) {
  const handleClick = (url?: string) => {
    if (!url || typeof window === "undefined") return;
    window.open(url);
  };

  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 cursor-pointer"
      onClick={() => handleClick(education.url)}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Education
      </h2>
      <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 relative hover:bg-gray-100 dark:hover:bg-slate-700">
        <div className="absolute top-4 right-4 w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
          <MoveUpRight className="h-4 w-4 text-white" />
        </div>
        <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-2 pr-8">
          {education.degree} @ {education.school}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
          {education.location}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {education.duration}
        </p>
      </div>
    </div>
  );
}
