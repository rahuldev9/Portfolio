"use client";

import React from "react";
import { portfolioData } from "@/Data/portfolioData";

import ProfileCard from "./ProfileCard";
import SocialBoxes from "./SocialBoxes";
import ExperienceList from "./ExperienceList";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";
import ProjectsGrid from "./ProjectsGrid";
import { Github } from "lucide-react";
import MapView from "./MapView";

const BentoPortfolio = () => {
  const d = portfolioData;
  const locations = [
    {
      id: 1,
      name: d.name,
      studentName: d.name,

      contactUrl: d.socialLinks?.[0]?.url,
      profileImage: d.profileImage,
      lat: d.education.coords[0],
      lng: d.education.coords[1],
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-4">
          <div className="lg:w-4/12 space-y-4 lg:sticky lg:top-0 flex items-center">
            <ProfileCard
              name={d.name}
              about={d.about}
              profileImage={d.profileImage}
            />
          </div>

          <div className="lg:w-8/12 space-y-4 lg:h-screen lg:overflow-y-scroll pr-2 bg-slate-50 dark:bg-slate-950">
            <SocialBoxes links={d.socialLinks} />

            <div className="w-full max-w-4xl mx-auto p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <MapView locations={locations} height="400px" />
                </div>

                <a
                  href={d.socialLinks[3]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-800 flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mb-6">
                    <Github className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 text-center mb-2">
                    {d.socialLinks[3]?.label || "CodeAlchemyML"}
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        {[...Array(7)].map((_, j) => (
                          <div
                            key={j}
                            className={`w-2.5 h-2.5 rounded-sm ${
                              (i * 7 + j * 3) % 5 === 0
                                ? "bg-green-500"
                                : (i * 7 + j * 3) % 3 === 0
                                  ? "bg-green-300"
                                  : "bg-gray-200 dark:bg-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 px-8 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-sm rounded-xl font-semibold transition-colors">
                    Follow
                  </span>
                </a>
              </div>
            </div>

            <ExperienceList experiences={d.experiences} />

            <SkillsCard
              languages={d.languages}
              techstack={d.techstack}
              tools={d.tools}
              frameworks={d.frameworks}
              databases={d.databases}
            />

            <EducationCard education={d.education} />

            <ProjectsGrid projects={d.projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoPortfolio;
