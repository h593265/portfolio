// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center  text-white">
      <h1 className="text-xl font-bold">DE</h1>
      <nav className="space-x-6">
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
        <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
