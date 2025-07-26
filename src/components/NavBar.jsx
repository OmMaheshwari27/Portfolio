import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 shadow dark:shadow-gray-800 backdrop-blur-md border-b border-white/30 dark:border-gray-700/50">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Name */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md h-10 w-10 flex items-center justify-center text-lg font-extrabold shadow-md">
                            Om
                        </div>
                        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Maheshwari</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
                            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Home</a>
                            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">About</a>
                            <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Skills</a>
                            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Projects</a>
                            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</a>
                        </div>
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button and dark mode toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
                    <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
                    <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
                    <a href="#skills" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
                    <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
                    <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;