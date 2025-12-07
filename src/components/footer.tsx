import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} Daniel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
