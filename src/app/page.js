"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight, Sparkles, Code2, Rocket, Github, Linkedin, Mail, BookOpen, GraduationCap
} from "lucide-react";
import {
  SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiReact,
  SiNodedotjs, SiMysql, SiAutocad, SiSketchup, SiPhp, SiLaravel, SiTailwindcss
} from "react-icons/si";
import {
  FaFileExcel, FaFileWord, FaFilePowerpoint, FaProjectDiagram
} from "react-icons/fa";

import { Anton } from "next/font/google";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const words = ["Web Developer", "Web Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const currentWord = words[wordIndex];

    const typingEffect = setInterval(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearInterval(typingEffect);
  }, [charIndex, isDeleting, wordIndex]);


  useEffect(() => {
    AOS.init({
      duration: 800,       
      once: true,          
      offset: 100,     
      easing: "ease-out",  
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">


      <style jsx global>{`

        .typing-cursor::after {
          content: '|';
          display: inline-block;
          color: #3b82f6;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

     <section
  id="home"
  className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-white text-black overflow-hidden -mt-10"
>
  <div className="max-w-6xl mx-auto w-full">
    {/* Desktop View */}
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
      <div
        className="space-y-6 text-left"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 border border-black/20 rounded-full backdrop-blur-sm"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Sparkles className="w-4 h-4 text-black animate-pulse" />
          <span className="text-sm font-medium text-black">
            Available for new projects
          </span>
        </div>

        <div className="space-y-3" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight">
            <span className="block mb-2 text-gray-800">Halo, I'm</span>
            <span className="block text-black">Gungdemayun</span>
          </h1>

          <div
            className="flex items-center gap-3 text-2xl xl:text-3xl text-gray-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Code2 className="w-8 h-8 text-black" />
            <span className="text-black font-bold typing-cursor">
              {displayedText}
            </span>
          </div>
        </div>

        <p
          className="text-lg xl:text-xl text-gray-700 leading-relaxed max-w-xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Passionate about crafting digital solutions that are{" "}
          <span className="font-semibold text-black">creative</span>,{" "}
          <span className="font-semibold text-black">innovative</span>, and{" "}
          <span className="font-semibold text-black">impactful</span>. Turning
          ideas into extraordinary digital experiences.
        </p>

        <div
          className="flex flex-wrap gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#projects"
            className="group bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            VIEW MY PROJECTS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            GET IN TOUCH
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div
          className="flex items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
          </a>

          <a
            href="mailto:gungdemayun64@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
          </a>
        </div>
      </div>

      <div
        className="flex items-center justify-center"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <div className="relative inline-block">
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/profil.jpg"
              alt="Gungdemayun Profile"
              fill
              className="rounded-full object-cover border-4 border-gray-200 shadow-xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </div>

    {/* Mobile View */}
    <div className="lg:hidden text-center space-y-8">
      <div
        className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 border border-black/20 rounded-full backdrop-blur-sm"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Sparkles className="w-4 h-4 text-black animate-pulse" />
        <span className="text-sm font-medium text-black">
          Available for new projects
        </span>
      </div>

      <div
        className="relative inline-block"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] mx-auto">
          <Image
            src="/profil.jpg"
            alt="Gungdemayun Profile"
            fill
            className="rounded-full object-cover border-4 border-gray-200 shadow-xl hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
          <span className="block mb-2 text-gray-800">Halo, I'm</span>
          <span className="block text-black">Gungdemayun</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl text-gray-800">
          <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          <span className="text-black font-bold typing-cursor">
            {displayedText}
          </span>
        </div>
      </div>

      <p
        className="text-lg xl:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Passionate about crafting digital solutions that are{" "}
        <span className="font-semibold text-black">creative</span>,{" "}
        <span className="font-semibold text-black">innovative</span>, and{" "}
        <span className="font-semibold text-black">impactful</span>. Turning
        ideas into extraordinary digital experiences.
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <a
          href="#projects"
          className="group w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Rocket className="w-5 h-5" />
          VIEW MY PROJECTS
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="group w-full sm:w-auto border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          GET IN TOUCH
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div
        className="flex items-center justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
        >
          <Github className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
        >
          <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
        </a>
        <a
          href="mailto:gungdemayun64@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300 group"
        >
          <Mail className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
        </a>
      </div>
    </div>
  </div>
</section>



      <section className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto w-full">
          <div
           id="about"
            className="text-center space-y-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2
              className={`${anton.className} text-3xl sm:text-4xl md:text-5xl text-black font-bold`}
            >
              About
            </h2>
           <p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a passionate web developer with experience in creating innovative and aesthetically crafted digital solutions.
          </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div
              className="lg:col-span-2 space-y-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-black text-white rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className={`${anton.className} text-2xl font-bold text-black`}>
                    My Journey
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  My journey in web development began with a simple curiosity to solve problems
                  and create things that make a difference. Over time, that curiosity grew into
                  a passion for building intuitive and visually engaging user experiences.  
                  Every line of code I write is a step toward crafting digital solutions that
                  are not only functional but meaningful.
                </p>
              </div>

            </div>
              <div
                className="lg:col-span-3"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h3
                  className={`${anton.className} text-2xl font-bold text-black mb-8 lg:mb-6 text-center lg:text-left`}
                >
                  Education Background
                </h3>

                <div className="relative border-l-2 border-gray-300 ml-3">
                  <div
                    className="mb-10 ml-8 transition-all duration-300 transform hover:scale-105"
                    data-aos="zoom-in-up"
                    data-aos-delay="500"
                  >
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-8 ring-white">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </span>
                    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-xl shadow-md">
                      <h4
                        className={`${anton.className} text-lg font-semibold text-black`}
                      >
                        Bachelor of Informatics Engineering
                      </h4>
                      <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                        Institut Bisnis dan Teknologi Indonesia, 2024 – 2027
                      </p>
                      <p className="text-base font-normal text-gray-700">
                        Focused on software development, web engineering, and user interface
                        design (UI/UX). This program strengthened my technical foundation and
                        passion for creating impactful digital solutions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="mb-10 ml-8 transition-all duration-300 transform hover:scale-105"
                    data-aos="zoom-in-up"
                    data-aos-delay="600"
                  >
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-8 ring-white">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </span>
                    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-xl shadow-md">
                      <h4
                        className={`${anton.className} text-lg font-semibold text-black`}
                      >
                        Senior High School
                      </h4>
                      <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                        SMA Dwijendra Denpasar, 2021 – 2024
                      </p>
                      <p className="text-base font-normal text-gray-700">
                        Studied a broad range of general subjects in science and social
                        studies. During this period, I developed my curiosity and creativity,
                        which later evolved into an interest in the world of technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black"
        id="skills"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div
            className="text-center space-y-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <h2
              className={`${anton.className} text-3xl sm:text-4xl md:text-5xl text-black font-bold`}
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              SKILLS
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              The technologies and tools I use to craft high-quality digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3
                  className={`${anton.className} text-3xl font-bold text-black mb-5`}
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="800"
                >
                  DIGITAL
                </h3>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
                    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                    { icon: <SiCss3 className="text-blue-600" />, name: "CSS" },
                    { icon: <SiPhp className="text-indigo-600" />, name: "PHP" },
                    { icon: <SiLaravel className="text-red-600" />, name: "Laravel" },
                    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
                    { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js" },
                    { icon: <SiReact className="text-sky-500" />, name: "React.js" },
                    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
                    { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
                      data-aos="zoom-in-up"
                      data-aos-delay={700 + index * 200}
                      data-aos-duration="700"
                      data-aos-easing="ease-in-out"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3
                  className={`${anton.className} text-3xl font-bold text-black mb-5`}
                  data-aos="fade-left"
                  data-aos-delay={700 + 10 * 200 + 400}
                  data-aos-duration="800"
                >
                  ARCHITECTURE & OFFICE
                </h3>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[

                    { icon: <FaFileExcel className="text-green-600" />, name: "Ms Excel" },
                    { icon: <FaFileWord className="text-blue-500" />, name: "Ms Word" },
                    { icon: <FaProjectDiagram className="text-green-500" />, name: "Ms Project" },
                    { icon: <FaFilePowerpoint className="text-orange-500" />, name: "Ms PowerPoint" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
                      data-aos="zoom-in-up"
                      data-aos-delay={700 + 10 * 200 + 400 + index * 200}
                      data-aos-duration="700"
                      data-aos-easing="ease-in-out"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black"
        id="projects"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div
            className="text-center space-y-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2
              className={`${anton.className} text-3xl sm:text-4xl md:text-5xl text-black font-bold`}
            >
              MY PROJECTS
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Here are some of my real-world projects that showcase my skills in web
              development, system design, and digital solutions for businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Maike Bali Tour",
                desc: "A professional tour and travel website built using WordPress and various plugins for booking, SEO, and content management. It showcases Bali travel packages, activities, and contact forms for easy booking.",
                tech: ["WordPress", "PHP", "Plugins", "SEO"],
                source: "https://www.maikebalitour.com/",
              },
              {
                title: "Car & Motorbike Rental Bali",
                desc: "A rental management website for cars and motorbikes in Bali, developed using PHP, JavaScript, Tailwind, and SQL. Includes booking system, search filters, and admin panel for data management.",
                tech: ["PHP", "JavaScript", "Tailwind", "SQL", "HTML"],
                source: "https://carrental.kesug.com/",
              },
              {
                title: "Resto Gung De",
                desc: "An online restaurant ordering system with QR code scanning for each table. Built for efficient dine-in ordering and real-time order tracking, integrated with admin panel for order and revenue management.",
                tech: ["PHP", "MySQL", "JavaScript", "Supabase", "Tailwind"],
                source: "https://restogungde.kesug.com/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-black">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-black text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 text-black hover:text-gray-700"
                >
                  Source
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>



    <footer
      className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black border-t border-gray-200"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2
          className={`${anton.className} text-3xl sm:text-4xl md:text-5xl text-black font-bold`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          LET’S CONNECT
        </h2>

        <p
          className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Have a project in mind or want to discuss potential opportunities? Whether it’s a digital
          experience or architectural space, feel free to reach out.
        </p>

        <div className="pt-4" data-aos="fade-up" data-aos-delay="500">
          <a
            href="mailto:gungdemayun64@gmail.com"
            className="inline-block border-2 border-black px-8 py-3 rounded-lg font-semibold text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            EMAIL ME
          </a>
        </div>

        <div
          className="flex justify-center gap-8 pt-6"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline underline-offset-4 transition-all"
          >
            GITHUB
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline underline-offset-4 transition-all"
          >
            INSTAGRAM
          </a>
        </div>
      </div>

      <div
        className="mt-16 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        © 2025 GUNG DEMAYUN. ALL RIGHTS RESERVED.
      </div>
    </footer>

      



      

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
