"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIBotButton({ onClick }: { onClick?: () => void }) {
  const [showCallout, setShowCallout] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      onAnimationComplete={() => setShowCallout(true)}
      className="md:absolute fixed bottom-0 right-4 z-50 flex flex-col items-end group"
    >
      {/* Speech Bubble / Callout */}
      <AnimatePresence>
        {showCallout && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative mb-6 mr-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 shadow-xl border border-slate-200/60 dark:border-slate-700/60 transition-colors duration-200"
          >
            <p className="text-xs font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
              Hello, I am Robin! 👋
            </p>

            {/* Pointer Arrow */}
            <div className="absolute -bottom-2 right-8 h-0 w-0 border-x-8 border-x-transparent border-t-[9px] border-t-white/80 dark:border-t-slate-900/80 drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-40 animate-pulse" />

        {/* Button Inner */}
        <div className="relative h-24 w-24 rounded-full flex items-center justify-center">
          {/* Robot */}
          <div className="relative">
            {/* Antennas */}
            <div className="absolute -top-5 left-2 w-1 h-4 bg-slate-600 rounded-full rotate-[-20deg]" />
            <div className="absolute -top-5 right-2 w-1 h-4 bg-slate-600 rounded-full rotate-[20deg]" />

            <div className="absolute -top-6 left-1 w-2 h-2 rounded-full bg-blue-300" />
            <div className="absolute -top-6 right-1 w-2 h-2 rounded-full bg-blue-300" />

            {/* Head */}
            <div className="w-12 h-10 rounded-2xl bg-gradient-to-b from-sky-200 to-sky-400 border-2 border-white relative">
              {/* Eyes */}
              <div className="absolute left-2 top-3 w-3 h-3 rounded-full bg-slate-900">
                <div className="absolute left-1 top-1 w-1 h-1 rounded-full bg-white" />
              </div>

              <div className="absolute right-2 top-3 w-3 h-3 rounded-full bg-slate-900">
                <div className="absolute left-1 top-1 w-1 h-1 rounded-full bg-white" />
              </div>

              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-slate-700 rounded-b-full" />
            </div>

            {/* Body */}
            <div className="mx-auto mt-1 w-8 h-8 rounded-xl bg-gradient-to-b from-sky-300 to-blue-500 border-2 border-white relative">
              {/* Button */}
              <div className="absolute left-1/2 top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-400" />
            </div>

            {/* Arms */}
            <div className="absolute top-11 -left-3 w-3 h-1 bg-sky-300 rounded-full rotate-12" />
            <div className="absolute top-11 -right-3 w-3 h-1 bg-sky-300 rounded-full -rotate-12" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
