"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/Hero.png";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function Header() {
  const statsData = [
    {
      label: "Years of\nExperience",
      value: 1,
    },
    {
      label: "Projects\nCompleted",
      value: 3,
    },
    {
      label: "Technologies\nMastered",
      value: 5,
    },
    {
      label: "Code\nCommits",
      value: 999,
    },
  ];

  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });

        if (countUp.error) console.log(countUp.error);
        else countUp.start();
      }
    });
  }, []);

  return (
    <header className="max-h-[100vh] text-white py-12 relative">
      {/* BG Elements */}
      <div className="absolute top-0 left-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-xl md:blur-[100px] -z-10" />
      <div className="absolute top-[20%] md:top-0 right-[10%] w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10" />
      <div className="absolute bottom-[5%] left-[20%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-xl md:blur-[100px] -z-10" />

      <div className="flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-gray-400">Web Developer</p>
          <h1 className="text-start text-2xl md:text-3xl lg:text-6xl font-unbounded font-normal mb-2">
            Hello I&apos;m{" "}
            <span className="text-[color:var(--primary-color))]">Sony H</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-md lg:text-xl font-normal font-sora my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            facere libero culpa molestiae, alias obcaecati dicta neque!
            Provident, facere vero.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="#"
              className="border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500"
            >
              <i className="bi bi-download me-2"></i> Download CV
            </Link>

            <div className="flex hero-social gap-2 text-xl">
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-[35%] w-[75%] mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-[30vh] md:w-[40vh] lg:w-[50vh] h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]">
              <Image
                src={Hero}
                alt="Portfolio Picture"
                className="w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats px-[8%] lg:px-[16%] mt-30 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <div key={index} className="flex gap-2 items-center">
            <h1
              ref={(el) => {
                countRefs.current[index] = el;
              }}
              className="text-6xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-xl ps-2 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
