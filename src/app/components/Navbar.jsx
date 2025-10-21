"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, User, Briefcase, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-black transition-all duration-300">
              GM
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-5 py-2.5 text-gray-700 hover:text-black font-medium transition-all duration-300"
              >
                {link.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -z-10"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="#contact"
              className="hidden md:block relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 border border-gray-300 hover:border-black hover:bg-black/5 transition-all duration-300 group"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-black transform transition-all duration-300 ${
                    isOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-black top-3 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-black transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-gray-300 shadow-2xl transform transition-all duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Menu</span>
              </div>
              <button
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-300 hover:bg-black/10 transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-black group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:translate-x-2 hover:shadow-md"
                  style={{
                    animation: isOpen
                      ? `slideIn 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 group-hover:bg-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <link.icon className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="flex-1 text-gray-800 group-hover:text-black font-medium transition-colors duration-300">
                    {link.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={toggleMenu}
              className="relative group overflow-hidden w-full py-4 px-6 bg-black hover:bg-gray-800 text-white text-center font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Get Started
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
}
