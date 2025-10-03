"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import {
  SiJavascript,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import Link from "next/link";

export default function Work() {
  const projects = [
    {
      id: "01",
      title: "Lokerin - Job Vacancy",
      desc: "Job Vacancies Web using React",
      tech: ["React JS", "Tailwind CSS", "JavaScript"],
      img: "/Project-1.jpg",
    },
    {
      id: "02",
      title: "Jobify - Admin Dashboard",
      desc: "An Admin Dashboard for Job Vacancy Web using React",
      tech: ["React JS", "Tailwind CSS", "JavaScript"],
      img: "/Project-2.jpg",
    },
    {
      id: "03",
      title: "3D Portfolio",
      desc: "Portfolio with 3D Model",
      tech: ["React JS", "Tailwind CSS", "Three JS", "TypeScript"],
      img: "/Project-3.jpg",
    },
    {
      id: "04",
      title: "Travel Agency",
      desc: "Currently in Progress",
      tech: ["Soon"],
      img: "/Project-4.jpg",
    },
  ];

  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side */}
              <div className="work-content">
                <h2 className="text-8xl font-bold stroke-text">{project.id}</h2>
                <h3 className="text-5xl font-semibold font-unbounded mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 text-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Icons */}
                <div className="flex gap-4 mt-4">
                  {project.tech.map((tech, index) => {
                    let IconComponent;
                    switch (tech) {
                      case "React JS":
                        IconComponent = FaReact;
                        break;
                      case "Tailwind CSS":
                        IconComponent = SiTailwindcss;
                        break;
                      case "JavaScript":
                        IconComponent = SiJavascript;
                        break;
                      case "TypeScript":
                        IconComponent = SiTypescript;
                        break;
                      case "Three JS":
                        IconComponent = SiThreedotjs;
                        break;

                      default:
                        IconComponent = BsClock;
                        break;
                    }
                    return IconComponent ? (
                      <div
                        key={index}
                        className="work-icons text-4xl text-[var(--primary-color)] cursor-pointer hover:text-white transition-all duration-300"
                        title={tech}
                      >
                        <IconComponent />
                      </div>
                    ) : null;
                  })}
                </div>

                {/* Icons */}
                <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                  <Link
                    href="#"
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <i className="bi bi-arrow-up-right text-2xl"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <i className="bi bi-github text-2xl"></i>
                  </Link>
                </div>
              </div>

              <div className="relative work-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={450}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Button */}
        <div className="flex gap-3 justify-end mt-6">
          <button className="custom-prev w-12 h-12 items-center justify-center bg-[var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
            <i className="bi bi-arrow-left text-2xl"></i>
          </button>
          <button className="custom-next w-12 h-12 items-center justify-center bg-[var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
            <i className="bi bi-arrow-right text-2xl"></i>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
