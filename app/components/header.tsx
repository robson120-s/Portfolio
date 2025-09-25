import React from "react";
import Link from "next/link";
// import { AttractiveThemeToggle } from "./AttractiveThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-green-700 via-neutral-700 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-rose shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          My Portfolio
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link
            href="/contact"
            className="hover:text-amber-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-amber-300 transition-colors duration-200"
          >
            My Projects
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="ml-6">
          {/* <AttractiveThemeToggle /> */}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-evenly py-2 text-white bg-black/20 backdrop-blur-sm">
        <Link href="/contact" className="hover:text-amber-300">
          Contact
        </Link>
        <Link href="/about" className="hover:text-amber-300">
          About
        </Link>
        <Link href="/projects" className="hover:text-amber-300">
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
