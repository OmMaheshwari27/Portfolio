import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="px-6 py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10">
        About Me <span className="block w-24 h-1 bg-purple-500 mx-auto mt-2"></span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Intro */}
        <div>
          <p className="mb-4">
            I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science Engineering with specialization in Data Science from Dr. APJ Abdul Kalam Technical University.
          </p>
          <p className="mb-6">
            With a strong foundation in MERN stack development, I love creating scalable web applications that solve real-world problems. My journey in technology is driven by curiosity and a commitment to continuous learning.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Ghaziabad, UP, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+919568660020" className="hover:underline">+91 9568660020</a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600" />
              <a
                href="mailto:oom12345609@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                oom12345609@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-xl mt-4">
              <a
                href="https://www.linkedin.com/in/om-maheshwari-a51b41233/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/OmMaheshwari27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side - Education */}
        <div className="space-y-6">
          <div className="p-5 shadow rounded-lg bg-white dark:bg-gray-200/10">
            <h3 className="font-bold text-lg dark:text-white">
              B.Tech in Computer Science
            </h3>
            <a
              href="https://abes.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Dr. APJ Abdul Kalam Technical University, ABES Engineering College
            </a>
            <p className="dark:text-gray-300">Ghaziabad, India (Expected 2026)</p>
          </div>
          <div className="p-5 shadow rounded-lg bg-white dark:bg-gray-700">
            <h3 className="font-bold text-lg dark:text-white">Senior Secondary (PCM) – 91.8%</h3>
            <p className="text-blue-600 dark:text-blue-400">KCM School, Moradabad</p>
            <p className="dark:text-gray-300">2021–2022</p>
          </div>
          <div className="p-5 shadow rounded-lg bg-white dark:bg-gray-700">
            <h3 className="font-bold text-lg dark:text-white">High School – 93.2%</h3>
            <p className="text-blue-600 dark:text-blue-400">KCM School, Moradabad</p>
            <p className="dark:text-gray-300">2019–2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;