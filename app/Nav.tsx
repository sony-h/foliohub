"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Resume", href: "/Resume" },
    { name: "Work", href: "/Work" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="w-full z-[100] transition-all duration-300">
      <div className="flex justify-between items-center px-[10%] lg:*:px-[8%] py-6">
        <Link
          href="/"
          className="text-xl md:text-3xl lg:text-5xl font-bold font-unbounded text-white logo"
        >
          Folio
          <span className="text-[var(--primary-color)] font-unbounded">
            Hub.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex nav-menu items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold transition-all text-white relative px-2 py-2 rounded hover:text-[--primary-color] ${
                  pathname === link.href
                    ? "active-links text-[--primary-color]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/Contact"
            className="bg-[var(--primary-color)] px-5 py-2 text-sm md:text-md lg:text-lg text-white font-semibold cursor-pointer rounded-full transition-all duration-300 hover:bg-transparent shadow-md hover:shadow-[0px_2px_5px_var(--primary-color)]"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile  */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          <i className="ri-menu-2-fill text-white"></i>
        </button>
      </div>

      {/* Side Menu with Smooth Transition */}
      <div
        className={`lg:hidden bg-[#1c1b21] text-white border-y border-[--primary-color] px-[8%] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
          IsMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-base relative"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
