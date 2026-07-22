"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import Header from "./Header";

type SocialLink = { url?: string; label?: string };

type Props = {
  links: SocialLink[];
};

export default function SocialBoxes({ links }: Props) {
  return (
    <>
      <Header />
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <a
            href={links[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 dark:bg-blue-950/40 rounded-3xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-start">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Linkedin className="w-7 h-7 text-white" />
              </div>
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {links[0]?.label}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                linkedin.com
              </p>
            </div>
          </a>

          <a
            href={`mailto:${links[1]?.url}`}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-800"
          >
            <div className="flex flex-col items-start">
              <div className="w-14 h-14 bg-gray-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-gray-700 dark:text-slate-300" />
              </div>
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Personal email
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                gmail.com
              </p>
            </div>
          </a>

          <a
            href={links[2]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-800"
          >
            <div className="flex flex-col items-start">
              <div className="w-14 h-14 bg-gray-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white dark:bg-slate-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-10 h-10"
                  >
                    <path fill="#0F9D58" d="M15.4 8L2 31.4l7.7 13.3L23 21.3z" />
                    <path fill="#F4B400" d="M32.6 8H15.4L23 21.3h17.2z" />
                    <path fill="#4285F4" d="M23 21.3L9.7 44.7H38.3L23 21.3z" />
                  </svg>
                </div>
              </div>
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                View My Resume
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                drive.google.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
