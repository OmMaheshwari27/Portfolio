import React from "react";
import { FaCode, FaDatabase, FaCloud, FaTools, FaRocket, FaLaptopCode } from "react-icons/fa";

const skillsData = [
  {
    icon: <FaLaptopCode />, label: "Frontend Development", color: "bg-blue-500", skills: [
      "React.js", "Redux Toolkit", "React-Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"
    ]
  },
  {
    icon: <FaCode />, label: "Backend Development", color: "bg-green-500", skills: [
      "Node.js", "Express.js", "RESTful APIs", "JWT Authentication"
    ]
  },
  {
    icon: <FaDatabase />, label: "Database & Cloud", color: "bg-purple-500", skills: [
      "MongoDB", "Mongoose (ODM)", "NoSQL", "AWS"
    ]
  },
  {
    icon: <FaRocket />, label: "Programming & Concepts", color: "bg-orange-500", skills: [
      "JavaScript", "OOPs", "Data Structures", "Algorithms", "Problem-Solving"
    ]
  },
  {
    icon: <FaTools />, label: "Tools & Technologies", color: "bg-indigo-500", skills: [
      "Git", "GitHub", "Postman", "VS Code", "npm", "Webpack"
    ]
  },
  {
    icon: <FaCloud />, label: "Soft Skills", color: "bg-pink-500", skills: [
      "Team Collaboration",
"Project Management",
"Communication",
"Strategic Thinking",
"Agile & Waterfall"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          A comprehensive overview of my technical expertise and professional skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-200/10 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${card.color} text-white flex items-center justify-center rounded-full text-lg font-bold mr-4`}>
                  {card.label[0]}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{card.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;