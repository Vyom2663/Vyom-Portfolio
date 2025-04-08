import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full bg-white text-black dark:bg-black dark:text-white">
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
      <p className="text-center text-sm sm:text-lg text-gray-500 mb-4 sm:mb-8">
        Copyright © 2025 Vyom Joshi. All Rights Reserved.
      </p>
    </div>
  );
};
