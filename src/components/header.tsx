// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex justify-between items-center text-white bg-black bg-opacity-80 backdrop-blur-sm">
      <h1 className="text-xl font-bold">DE</h1>
      <nav className="flex gap-3 md:gap-6 text-sm md:text-base">
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="text-gray-300 hover:text-white transition-colors hidden sm:inline">Skills</a>
        <a href="#experience" className="text-gray-300 hover:text-white transition-colors hidden md:inline">Experience</a>
        <a href="#education" className="text-gray-300 hover:text-white transition-colors hidden md:inline">Education</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
