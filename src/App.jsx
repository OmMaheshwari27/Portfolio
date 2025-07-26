import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-6">
      <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 max-w-md w-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-blue-600">Tailwind Test Successful 🎉</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          If you can see this styled card, Tailwind is officially in the house.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition">
            I'm Working 😎
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
