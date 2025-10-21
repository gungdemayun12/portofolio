"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Simpan state ke localStorage dan update HTML
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded-full shadow-md hover:scale-105 transition-all"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <h1 className="text-4xl font-bold text-center pt-20">
        Halo Dunia 🌙☀️
      </h1>
      <p className="text-center text-gray-700 dark:text-gray-300">
        Ini contoh dark mode bekerja!
      </p>
    </div>
  );
}
