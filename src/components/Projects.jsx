import React from "react";

const projects = [
  {
    name: "DevTinder",
    description:
      "Developer matchmaking app with swipe-based interactions, real-time chat, and developer-focused profile insights.",
    stack: ["MERN Stack", "Socket.IO", "JWT", "TailwindCSS"],
    linesOfCode: "2,800+",
    features: [
      "Real-time Chat",
      "Swipe Matching",
      "Authentication",
      "User Profiles",
      "Responsive UI"
    ],
    github: "https://github.com/ommaheshwari04/dev-tinder",
    demo: "https://dev-tinder-frontend.vercel.app/",
    borderColor: "border-pink-500"
  },
  {
    name: "Task Manager",
    description:
      "A full-stack application to manage personal tasks with deadlines, priority settings, and status tracking.",
    stack: ["MERN Stack", "JWT", "TailwindCSS"],
    linesOfCode: "1,800+",
    features: [
      "Add/Edit/Delete Tasks",
      "Priority Labels",
      "JWT Auth",
      "Progress Tracker",
      "Responsive UI"
    ],
    github: "https://github.com/ommaheshwari04/task-manager",
    demo: "https://task-manager-frontend-ruby.vercel.app/",
    borderColor: "border-blue-500"
  },
  {
    name: "Expense Tracker",
    description:
      "Track your daily expenses and income with visual charts and summaries.",
    stack: ["React", "Context API", "TailwindCSS"],
    linesOfCode: "900+",
    features: [
      "Add/Delete Expenses",
      "Chart.js Integration",
      "Real-time Summary",
      "Responsive Design"
    ],
    github: "https://github.com/ommaheshwari04/expense-tracker",
    demo: "https://expense-tracker-omega-plum.vercel.app/",
    borderColor: "border-purple-500"
  },
  {
    name: "Random Password Generator",
    description:
      "Tool to generate secure, random passwords with copy-to-clipboard functionality.",
    stack: ["HTML", "CSS", "JavaScript"],
    linesOfCode: "300+",
    features: [
      "Custom Length",
      "Uppercase/Lowercase",
      "Symbols/Numeric Toggle",
      "Clipboard Copy"
    ],
    github: "https://github.com/ommaheshwari04/password-generator",
    demo: "https://ommaheshwari04.github.io/password-generator/",
    borderColor: "border-green-500"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800" id="projects">
      <h2 className="text-4xl font-bold text-center mb-2 dark:text-white">Featured Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        A showcase of my development journey and technical expertise
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-6 bg-white dark:bg-gray-200/10 border-t-4 ${proj.borderColor}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold dark:text-white">
                <span role="img" aria-label="project">
                  💻
                </span>{" "}
                {proj.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-3 py-1 rounded-md hover:opacity-90 cursor-pointer"
                >
                  GitHub
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 cursor-pointer"
                >
                  Demo
                </a>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-600 text-sm px-2 py-1 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm mb-2 dark:text-gray-300">
              <span role="img" aria-label="lines of code">
                📊
              </span>{" "}
              Lines of Code: <span className="text-blue-600 dark:text-blue-400 font-semibold">{proj.linesOfCode}</span>
            </p>
            <div className="text-sm">
                <p className="font-semibold mb-1 dark:text-white">Key Features:</p>
                <ul className="list-disc pl-5 dark:text-gray-300">
                {proj.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;