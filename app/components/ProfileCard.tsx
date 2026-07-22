"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  name: string;
  about: string;
  profileImage?: string;
};

export default function ProfileCard({ name, about, profileImage }: Props) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8">
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          className="w-48 h-48 rounded-full mb-4 object-cover"
          alt={`${name} profile`}
        />
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
          {name}
        </h1>
        <p className="sm:text-xl text-slate-600 dark:text-slate-400 text-center leading-relaxed">
          {about}
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <motion.span whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://www.linkedin.com/in/rahul-mudavath-848978301/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin
              className="text-gray-400 hover:text-blue-500 cursor-pointer"
              size={30}
            />
          </Link>
        </motion.span>

        <motion.span whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://github.com/rahuldev9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github
              className="text-gray-400 hover:text-blue-500 cursor-pointer"
              size={30}
            />
          </Link>
        </motion.span>
      </div>
    </div>
  );
}
