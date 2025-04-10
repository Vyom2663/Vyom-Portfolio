"use client";

import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/component/aboutme" },
    { label: "Experience", href: "/component/experiance" },
    { label: "Projects", href: "/component/project" },
    { label: "Contact", href: "/component/contect" },
    { label: "Journey", href: "/component/journey" },
  ];

  return (
    <nav className="relative w-full border-b border-gray-700 bg-black overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star dark:star-dark star-light"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="text-2xl sm:text-3xl text-white font-serif">
            <Link href="/">Vyom Joshi</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-6 text-lg font-serif text-white">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:underline underline-offset-8 hover:text-gray-400 transition duration-300"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="bg-gray-900 text-white rounded-md mt-2 shadow-lg p-4">
            <ul className="flex flex-col space-y-4 text-base font-serif">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:text-gray-300 transition duration-300"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
