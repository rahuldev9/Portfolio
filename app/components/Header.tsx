"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const scrollToWork = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-around px-6 py-4">
        {/* Navigation */}

        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToWork("work")}
            className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>

          <button
            onClick={() => scrollToWork("projects")}
            className="text-sm cursor-pointer font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToWork("skills")}
            className="text-sm cursor-pointer font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Skills
          </button>
          <ThemeToggle />
        </nav>

        {/* Theme Toggle */}
      </div>
    </header>
  );
}
