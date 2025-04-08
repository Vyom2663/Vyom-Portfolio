import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Shooting Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
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

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="flex-1 p-6 sm:p-11 items-center">
          <ul className="flex flex-wrap justify-center text-lg sm:text-2xl space-x-4 sm:space-x-5 font-serif">
            <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
              <Link href="/component/aboutme">About</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
              <Link href="/component/experiance">Experience</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
              <Link href="/component/project">Projects</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
              <Link href="/component/contect">Contact</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
              <Link href="../data">Data</Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-sm sm:text-lg text-gray-500 dark:text-gray-400 pb-4 sm:pb-8">
          Copyright © 2025 Vyom Joshi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
