import React from 'react'

const Home = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden px-4 sm:px-8">
            {/* Radial pattern overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(176,196,222,0.15)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(circle,rgba(96,165,250,0.10)_1px,transparent_1px)] opacity-60"></div>
                {/* Blurred gradient blob */}
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full bg-gradient-to-tr from-blue-400/30 via-purple-400/20 to-pink-400/20 blur-3xl opacity-70 dark:from-blue-700/40 dark:via-purple-700/30 dark:to-pink-700/30"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    Om Maheshwari
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-6">
                    Full Stack Developer & Problem Solver
                </h2>
                <p className="text-gray-900 dark:text-gray-300 mb-8 text-md sm:text-lg leading-relaxed">
                    Passionate about creating innovative web solutions with modern technologies.
                    Specializing in MERN stack development with a focus on user experience and scalable architecture.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1uQptlgqmlYOgSzGX4hf1QFlDFboFiF67/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-md border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Home
