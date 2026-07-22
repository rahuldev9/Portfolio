"use client";

import React from "react";

type Props = {
  languages: string[];
  techstack: string[];
  tools: string[];
  frameworks: string[];
  databases: string[];
};

export default function SkillsCard({
  languages,
  techstack,
  tools,
  frameworks,
  databases,
}: Props) {
  return (
    <div
      id="skills"
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Skills
      </h2>
      <div className="space-y-4">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Languages:</span>{" "}
          {languages.join(", ")}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Techstack:</span>{" "}
          {techstack.join(", ")}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Tools:</span> {tools.join(", ")}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Frameworks:</span>{" "}
          {frameworks.join(", ")}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Databases:</span>{" "}
          {databases.join(", ")}
        </p>
      </div>
    </div>
  );
}
