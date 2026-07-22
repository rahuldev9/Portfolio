"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioChat from "./PortfolioChat";

type Props = {
  name: string;
  about: string;
  profileImage?: string;
};

export default function ProfileCard({ name, about, profileImage }: Props) {
  return (
    <div className="relative bg-slate-50 w-full h-full dark:bg-slate-950 rounded-3xl p-8">
      <div className="flex flex-col items-center">
        <motion.img
          src={profileImage}
          className="w-48 h-48 rounded-full mb-4 object-cover"
          alt={`${name} profile`}
          initial={{ opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="sm:text-xl text-slate-600 dark:text-slate-400 text-center leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          {about}
        </motion.p>
      </div>

      <motion.div
        className="flex justify-center items-center space-x-4 mt-4"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.25, ease: "easeOut" }}
      >
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
      </motion.div>

      <PortfolioChat />
    </div>
  );
}
