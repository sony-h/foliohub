"use client";

import { useState } from "react";
import {
  FaBootstrap,
  FaGit,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = ["Experience", "Education", "Skills", "About"];

  const experiences = [
    {
      Date: "Oct 2024 - Aug 2025",
      Role: "Back-end Developer",
      Company: "Cloufina Nata Karya",
    },
    {
      Date: "Aug 2022 - Dec 2022",
      Role: "Full-stack Developer (Intern)",
      Company: "Gama Multi Usaha Mandiri",
    },
    {
      Date: "Jan 2022 - Apr 2022",
      Role: "Software Engineer (Intern)",
      Company: "BPRS Dana Hidayatullah",
    },
  ];

  const educations = [
    {
      Year: "2019 - 2023",
      Degree: "Bachelor of Informatics",
      Institute: "Universitas Diponegoro",
    },
    {
      Year: "2016 - 2019",
      Degree: "High School",
      Institute: "SMA N 1 Wonosobo",
    },
  ];

  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Go", icon: <FaGolang /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGit /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <div>
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            Why hire me?
          </h2>
          <p className="text-gray-400 mt-6 mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            accusantium impedit voluptas! Eum voluptatibus quae provident aut
            nemo quaerat nulla.
          </p>
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            {activeTab}
          </h2>
          <p className="text-gray-400 mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nisi quae laboriosam sunt ipsa odio.
          </p>
          {/* Experience */}
          {activeTab === "Experience" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-[var(--primary-color)] font-semibold my-2">
                      {exp.Date}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {exp.Role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[var(--primary-color)] text-2xl pe-2">
                        •
                      </span>
                      {exp.Company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "Education" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-[var(--primary-color)] font-semibold my-2">
                      {edu.Year}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {edu.Degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[var(--primary-color)] text-2xl pe-2">
                        •
                      </span>
                      {edu.Institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === "Skills" && (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="relative bg-gray-500/5 rounded py-11 flex flex-col items-center group cursor-pointer"
                >
                  <i className="text-6xl group-hover:text-[var(--primary-color)] transition-all duration-500">
                    {skill.icon}
                  </i>
                  {/* Tooltip */}
                  <span className="absolute bottom-[5px] scale-0 rounded px-2 py-1 font-semibold text-xl transition-all duration-500 group-hover:scale-100 group-hover:text-[var(--primary-color)]">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* About */}
          {activeTab === "About" && (
            <div className="text-gray-400 space-y-4">
              <p>
                Hi! I&apos;m{" "}
                <span className="text-[var(--primary-color)] font-semibold">
                  Sony&nbsp;
                </span>
                a passionate developer based in Indonesia who enjoys exploring
                any kind of technologies.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Experience</strong> 1+ year in Web Development
                </li>
                <li>
                  <strong>Nationality</strong> Indonesian
                </li>
                <li>
                  <strong>Freelance</strong> Available for projects
                </li>
                <li>
                  <strong>Phone</strong> (+62) 853 2830 2993
                </li>
                <li>
                  <strong>Email</strong> sonyh871@gmail.com
                </li>
                <li>
                  <strong>Languages</strong> English, Indonesia
                </li>
              </ul>
              <p>
                I specialize in back-end development using Node.js, and
                currently exploring front-end development using React.js. I love
                turning ideas into functional, elegant web solutions that match
                user&apos;s needs.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
