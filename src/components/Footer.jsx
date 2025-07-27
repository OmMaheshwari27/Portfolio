import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9fbfc] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Om Maheshwari. All rights reserved.
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/om-maheshwari-a51b41233/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/OmMaheshwari27" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:text-white dark:hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/__om_maheshwari__/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:text-rose-500 dark:hover:text-rose-400 transition">
            <FaInstagram />
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-4 h-4" />
          Top
        </button>
      </div>
    </footer>
  );
};

export default Footer; 